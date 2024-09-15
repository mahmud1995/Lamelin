import {Request, Response} from 'express';
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service"
import { LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';

const memberService = new MemberService();

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome"); // Terminal ucun
        res.render("home"); // User uchun
        // send | json | redirect | end | render
    } catch(err) {
        console.log("ERROR, goHome:", err);
        res.send("Error");
    }
};

restaurantController.getLogin = (req: Request, res: Response) => {
    try {
        res.render("login");
    } catch(err) {
        console.log("ERROR, getLogin:", err)
    }
};

restaurantController.getSignup = (req: Request, res: Response) => {
    try {
        console.log("getSignup");
        res.render("signup");
    } catch(err) {
        console.log("ERROR, getSignup:", err)
    }
};

restaurantController.processSignup  = async (req: Request, res: Response) => {
    try {
        console.log("processLogin");

        // New Member == member.ts
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;
        const result = await memberService.signup(newMember); // await==> async bulgani ucun
        // TODO: SESSIONS AUTHENTICATION    
        res.send("DONE");
    } catch(err) {
        console.log("ERROR, processSignup:", err)
    }
};
    
restaurantController.processLogin  = async (req: Request, res: Response) => {
    try {
        console.log("processLogin");

        const input: LoginInput = req.body;
        const result = await memberService.login(input);
        // TODO: SESSIONS AUTHENTICATION
        res.send('DONE');
    } catch(err) {
        console.log("ERROR, processLogin:", err);
        res.send(err);
    }
};


export default restaurantController;