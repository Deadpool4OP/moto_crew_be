export class ApiResponse {
    success;
    message;
    data;
    constructor(statusCode, message, data) {
        this.success = statusCode < 400;
        this.message = message;
        this.data = data;
    }
}
//# sourceMappingURL=ApiResponse.js.map