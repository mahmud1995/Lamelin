import MemberModel from "../schema/Member.model";
import { LoginInput, Member, MemberInput, MemberUpdateInput } from "../libs/types/member";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { MemberStatus, MemberType } from "../libs/enums/member.enum";
import * as bcrypt from "bcryptjs";
import { shapeIntoMongooseObectId } from "../libs/config";
import { Document } from "mongoose";
class MemberService {
    private readonly memberModel;
    
    constructor() {
        this.memberModel = MemberModel;
    }


	/** SPA */
    public async getRestaurant(): Promise<Member> {
        const result = await this.memberModel
        .findOne({ memberType: MemberType.RESTAURANT })
        .exec();
        if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

        return result as unknown as Member;

    }

    public async signup(input: MemberInput): Promise<Member> {
        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
        try {
            const result = await this.memberModel.create(input);
            result.memberPassword = "";
            return result.toJSON() as unknown as Member;
        } catch (err) {
            console.error("Error, model: signup", err);
            throw new Errors(HttpCode.BAD_REQUEST, Message.USED_NICK_PHONE);
        }
    }
    public async login(input: LoginInput): Promise<Member> {
        // TODO: consider member status later
        const member = await this.memberModel
            .findOne(
                {
                    memberNick: input.memberNick, 
                    memberStatus: {$ne: MemberStatus.DELETE}
                }, 
                { memberNick: 1, memberPassword: 1, memberStatus: 1 }
            )
            .exec();
        if(!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);
        else if(member.memberStatus === MemberStatus.BLOCK) {
            throw new Errors(HttpCode.FORBIDDEN, Message.BLOCKED_USER)
        }
        
        const isMatch = await bcrypt.compare(
            input.memberPassword, 
            member.memberPassword
        );
        // const isMatch = input.memberPassword === member.memberPassword;
        
        if(!isMatch) {
            throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
        }
        return await this.memberModel.findById(member._id).lean().exec() as unknown as Member;
        // .lean() orqali db dan olgan datani O'ZGARTIRISH imkoniyatini olamiz
    }

    public async getMemberDetail(member: Member): Promise<Member> {
        const memberId = shapeIntoMongooseObectId(member._id);
        const result = await this.memberModel.findOne({ _id: memberId, memberStatus: MemberStatus.ACTIVE} ).exec();
        if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

        return result as Document & Member;
    }

    public async updateMember(
        member: Member, 
        input: MemberUpdateInput
    ): Promise<Member> {
        const memberId = shapeIntoMongooseObectId(member._id);
        const result = await this.memberModel
            .findOneAndUpdate({ _id: memberId }, input, { new : true })
            .exec();
        if(!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);
        
        return result as unknown as Member;

    }


    public async getTopUsers(): Promise<Member[]> {
        const result = await this.memberModel
        .find({
            memberStatus: MemberStatus.ACTIVE,
            memberPoints: { $gte: 1 },
        })
        .sort({ memberPoints: -1})
        .limit(4)
        .exec();
        if(!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);
        // @ts-ignore
        return result;
    }

    public async addUserPoint(member: Member, point: number): Promise<Member> {
        const memberId = shapeIntoMongooseObectId(member._id);
        console.log('member: =>', member);
        console.log('point: =>', point);
        return  await this.memberModel
            .findOneAndUpdate(
                {
                    _id: memberId,
                    memberType: MemberType.USER,
                    memberStatus: MemberStatus.ACTIVE,
                },
                {$inc: {memberPoints: point} },
                {new: true},
            )
            .exec() as unknown as Member;
    }

    /** BSSR */

    public async processSignup(input: MemberInput): Promise<Member> {
        const exist = await this.memberModel
            .findOne({ memberType: MemberType.RESTAURANT })
            .exec();
        if (exist) throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);

        console.log('salt:', input.memberPassword);
        const salt = await bcrypt.genSalt();
        input.memberPassword = await bcrypt.hash(input.memberPassword, salt);
        console.log('salt:', input.memberPassword);

        try {
            const result = await this.memberModel.create(input);
            result.memberPassword = '';
            console.log("result", result);
            return result as unknown as Member;


        } catch (err) {
            throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
        }
    }
    
    public async processLogin(input: LoginInput): Promise<Member> {
        const member = await this.memberModel
            .findOne(
                { memberNick: input.memberNick },
                { memberNick: 1, memberPassword: 1 }
            )
            .exec();
        if (!member) throw new Errors(HttpCode.NOT_FOUND, Message.NO_MEMBER_NICK);

        const isMatch = await bcrypt.compare(
            input.memberPassword,
            member.memberPassword
        );

        if (!isMatch) {
            throw new Errors(HttpCode.UNAUTHORIZED, Message.WRONG_PASSWORD);
        }

        return await this.memberModel.findById(member._id).exec() as unknown as Member;
    }

    public async getUsers(): Promise<Member[]> {
        const result = await this.memberModel
        .find({memberType: MemberType.USER})
        .exec();
        if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

        return result as unknown as Member[];
    }

    public async updateChosenUser(input: MemberUpdateInput): Promise<Member[]> {
        input._id = shapeIntoMongooseObectId(input._id);
        const result = await this.memberModel
        .findByIdAndUpdate({_id: input._id}, input, {new: true})
        .exec();
        if (!result) throw new Errors(HttpCode.NOT_MODIFIED, Message.UPDATE_FAILED);

        return result as unknown as Member[];
    }


}

export default MemberService;