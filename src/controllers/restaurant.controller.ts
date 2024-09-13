import {Request, Response} from 'express';
import {T} from "../libs/types/common";
import MemberService from "../models/Member.service"
import { LoginInput, MemberInput } from '../libs/types/member';
import { MemberType } from '../libs/enums/member.enum';

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
    try {
        console.log("goHome");
        res.send("Home Page");
        // send | json | redirect | end | render
    } catch(err) {
        console.log("ERROR, goHome:", err);
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
        console.log("getSignup");
        res.send('Sign-up PAge');
    } catch(err) {
        console.log("ERROR, getSignup:", err)
    }
};

restaurantController.processLogin  = async (req: Request, res: Response) => {
    try {
        console.log("processLogin");
        console.log("body:", req.body);
        const input: LoginInput = req.body;

        const memberService = new MemberService();
        const result = await memberService.processLogin(input);

        res.send('DONE');
    } catch(err) {
        console.log("ERROR, processLogin:", err);
        res.send(err);
    }
};
restaurantController.processSignup  = async (req: Request, res: Response) => {
    try {
        console.log("processLogin");
        console.log("body:", req.body);

        // New Member == member.ts
        const newMember: MemberInput = req.body;
        newMember.memberType = MemberType.RESTAURANT;

        const memberService = new MemberService();
        await memberService.processSignup(newMember); // await==> async bulgani ucun
        
        res.send('DONE');
    } catch(err) {
        console.log("ERROR, processSignup:", err)
    }
};


export default restaurantController;