import {Request, Response} from 'express';
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service"
import { AdminRequest, LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';
import { Message } from '../libs/Errors';

const memberService = new MemberService();
const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome"); // Terminal ucun
        res.render("home"); // User uchun
        // send | json | redirect | end | render
    } catch(err) {
        console.log("ERROR, goHome:", err);
        res.redirect("/admin");
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        res.render("login");
    } catch(err) {
        console.log("ERROR, getLogin:", err)
        res.redirect("/admin");
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.render("signup");
    } catch(err) {
        console.log("ERROR, getSignup:", err)
        res.redirect("/admin");
    }
};

restaurantController.processSignup  = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processLogin");

        // New Member == member.ts
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.signup(newMember); // await==> async bulgani ucun

        // TODO: SESSIONS AUTHENTICATION
        req.session.member = result;
        req.session.save(function() {
            res.send(result);
        }); 

    } catch(err) {
        console.log("ERROR, processSignup:", err)
        const message = 
            err instanceof Error ? err.message : Message.SOMETHING_WENT_WRONG;
        res.send(
            `<script> alert("${message}"); window.location.replace('admin/signup') </script>`
        )
    }
};
    
restaurantController.processLogin  = async (req: AdminRequest, res: Response) => {
    try {
        console.log("processLogin");

        const input: LoginInput = req.body;
        const result = await memberService.login(input);
        // TODO: SESSIONS AUTHENTICATION
        req.session.member = result;
        req.session.save(function() {
            res.send(result);
        }); 
    } catch(err) {
        console.log("ERROR, processLogin:", err);
        const message = 
            err instanceof Error ? err.message: Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert("${message}"); window.location.replace('admin/login') </script>`);
    }
};

restaurantController.logout = async (
    req: AdminRequest,
    res: Response
) => {
    try {
        console.log("Logout");
        req.session.destroy(function() {
            res.redirect("/admin");
        });
    } catch (err) {
        console.log("Error, logout:", err);
        res.redirect("/admin");
    }
};




/* TEST */
restaurantController.checkAuthSession  = async (req: AdminRequest, res: Response) => {
    try {
        console.log("checkAuthSession");
        if(req.session?.member) 
            res.send(`Hi, ${req.session.member.memberNick}`);
        else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}")</script>)`);
    } catch(err) {
        console.log("ERROR, processLogin:", err);
        res.send(err);
    }
};


export default restaurantController;
