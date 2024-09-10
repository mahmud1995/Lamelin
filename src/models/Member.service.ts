import MemberModel from "../schema/Member.model";
import { Member, MemberInput } from "../libs/types/member";

class MemberService {
    private readonly memberModel;
    constructor() {
        this.memberModel = MemberModel;
    }

    public async processSingup(input: MemberInput): Promise<Member> { // method == async bulgani ucun Promise ishlatildi
        const result = await this.memberModel.create(input); // 
        return result;
    }
}

export default MemberService;