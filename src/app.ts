import cors from "cors";
import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";
import { Server as SocketIOServer } from "socket.io";
import http from "http";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: "sessions",
});
/*
                1-ENTRENCE
*/
const app = express();
// console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public"))); // tashqariga ochib berish
app.use("/uploads", express.static("./uploads"));
app.use(express.urlencoded({ extended: true })); // traditional API lar uchun backend imizga ochiqlayapmiz
app.use(express.json()); // REST API larni backendga kirishga ruxsat beradi, JSON==> OBJ
app.use(cookieParser()); // cookie lar parsing qb beradi
// MIddleWare integration hosil qilamiz
app.use(cors({ credentials: true, origin: true })); // ixtiyoriy domain dan kelayotgan request larni bizning severga kirishiga ruxsat beradi
app.use(morgan(MORGAN_FORMAT));

/*
                2-SESSIONS
*/
app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
      // maxAge: 1000 * 60 * 60 * 24 * 7, // 1week
      maxAge: 1000 * 3600 * 3, // 3hours
    },
    store: store,
    // resave: false, =>
    // 10:30 auth bulsa => 13:30 auth out, 12:00da kirsa ham 13:30 da chiqib ketadi
    resave: true, // 10:30 auth bulsa => 13:30
    saveUninitialized: true,
  })
);

app.use(function (req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;
  next();
});
// Authentication vs Authorization

// member: USER & RESTAURANT

// member: USER & AGENT & ADMIN

/*
                3-VIEWS
*/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/*
                4-ROUTERS
*/
app.use("/admin", routerAdmin); // BSSR
app.use("/", router); // SPA, MiddleWare DESIGN PATTERN ishlatilgan

/*
WE HAVE 2 GOALS FROM BURAK backend SERVER: 
    SPA: REACT ==> REST API Sifatida ishlatamiz
    BSSR: EJS(framework)

*/

// Butun serverni qulga olish
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: {
    origin: true,
    credentials: true,
  },
});

let summaryClient = 0;
io.on("connection", (socket) => {
  summaryClient++;
  console.log(`Connection & total [${summaryClient}]`);

  socket.on("disconnect", () => {
    summaryClient--;
    console.log(`Disconnection & total [${summaryClient}]`);
  });
});
/*
1. io = SocketIOServer ning instance hisoblanadi,
2. Bizning serverimizga yangi client connection amalga oshirsa
    ushbu client ning malumotini (socket) da qabul qilib clientni sonini oshirib 
    terminalda console log qilamiz.
*/
export default server; // CommonJS: module.exports = ,
