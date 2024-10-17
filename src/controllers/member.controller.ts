import {Request, Response} from 'express';
import { T } from "../libs/types/common";
import { LoginInput, Member, MemberInput } from '../libs/types/member';
import MemberService from '../models/Member.service';
import Errors from '../libs/Errors';
import AuthService from '../models/Auth.service';
// import { MemberType } from '../libs/enums/member.enum';
//                      REACT
const memberService = new MemberService();

const authService = new AuthService();

const memberController: T = {};

memberController.signup = async (req: Request, res:Response) => {
    try {
        console.log("signup");
        console.log("body:", req.body); // // // Fixed
        const input: MemberInput = req.body,
            result: Member = await memberService.signup(input);
            const token = await authService.createToken(result);
            console.log("token --> " ,result);
        // TODO: TOKEN 

        res.json({ member: result });    // // // Fixed
        // res.send("DONE!!!!!");
    } catch (err) {
        console.log("Error, signup:", err);
        res.status(Errors.standard.code).json(Errors.standard);
    }
};

memberController.login = async (req: Request, res: Response) => {
    try {
        console.log("login");
        console.log("body:", req.body);  // // // Fixed
        const input: LoginInput = req.body,
            result = await memberService.login(input),
            token = await authService.createToken(result);
            console.log("token =>", token);



        // TODO: TOKEN AUTHENTICATION
        console.log("result:", result)

        res.json({ member: result });
    } catch (err) {
        console.log("Error, processLogin:", err);
        res.status(Errors.standard.code).json(Errors.standard);
    }
};

export default memberController;