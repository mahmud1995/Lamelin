import {Request, Response} from 'express';
import {T} from "../libs/types/common";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
    try {
        res.send("Home Page")

    } catch(err) {
        console.log("ERROR, goHome:", err)
    }
    res.send('Home Page');
};
restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        res.send('Login Page');
    } catch(err) {
        console.log("ERROR, getLogin:", err)
    }
};
restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        res.send('Sign-up PAge');
    } catch(err) {
        console.log("ERROR, getSignup:", err)
    }
};

export default restaurantController;