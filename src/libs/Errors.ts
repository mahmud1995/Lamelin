                /* Here is for Error Handling*/
/*
Error Code: 
Error Message:
Error Class
*/

// Error Code
export enum HttpCode {
    OK = 200,
    CREATED = 201,
    NOT_MODIFIED = 304,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404, 
    INTERNAL_SERVER_ERROR = 500,
}

// Error Message
export enum Message {
    SOMETHING_WENT_WRONG = "Something went wrong",
    NO_DATA_FOUND = "No data is found",
    TOKEN_CREATION_FAILED = "Token creation error!",
    CREATE_FAILED = "Create is failed",
    UPDATE_FAILED = "Update is failed",
    USED_NICK_PHONE = "You are inserting already used nick or phone",
    NO_MEMBER_NICK = "No member with that member nick",
    BLOCKED_USER = "You have ben blocked, Contact the restaurant!",
    WRONG_PASSWORD = "Wrong password, please try again",
    NOT_AUTHENTICATED = "You are not authenticated, Please login first!",
}

// Class ==> Error 
class Errors extends Error {
    public code: HttpCode;
    public message: Message;

    static standard = {
        code: HttpCode.INTERNAL_SERVER_ERROR,
        message: Message.SOMETHING_WENT_WRONG,
    }
    
    constructor(statusCode: HttpCode, statusMessage: Message) {
        super();
        this.code = statusCode;
        this.message = statusMessage;
    }
}
export default Errors;