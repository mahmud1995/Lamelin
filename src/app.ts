import express from "express";
import path from 'path';
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from 'morgan';
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
const MongoDBStore =ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "sessions",
});
/*
                1-ENTRENCE
*/
const app = express();
// console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// MIddleWare integration hosil qilamiz
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
// Authentication vs Authorization

// member: USER & RESTAURANT

// member: USER & AGENT & ADMIN


/*
                3-VIEWS
*/
app.set('view', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');






/*
                4-ROUTERS
*/
app.use('/admin', routerAdmin); // BSSR
app.use('/', router); // SPA, MiddleWare DESIGN PATTERN ishlatilgan

/*
WE HAVE 2 GOALS FROM BURAK backend SERVER: 
    SPA: REACT ==> REST API Sifatida ishlatamiz
    BSSR: EJS(framework)

*/

export default app; // CommonJS: module.exports = , 