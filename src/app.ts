import express from "express";
import path from 'path';
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from 'morgan';
import { MORGAN_FORMAT } from "./libs/config";
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