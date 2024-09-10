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
    NOT_MODIFIED = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404, 
    INTERNAL_SERVER_ERROR = 500,
}

// Error Message
export enum Message {
    SOMETHING_WENT_WRONG = "Something went wrong",
    NO_DATA_FOUND = "No data is found",
    CREATE_FAILED = "Create is failed",
    UPDATE_FAILED = "Update is failed",
}

// Class ==> Error 
class Errors extends Error {
    public code: HttpCode;
    public message: Message;

    constructor(statusCode: HttpCode, statusMessage: Message) {
        super();
        this.code = statusCode;
        this.message = statusMessage;
    }
}
export default Errors;