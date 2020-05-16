class Responses {
    constructor() {
      return this;
    }
    public success(errorCode, data, message, meta) {
      return {
        error: false,
        errorCode,
        data,
        message,
        meta
      };
    }
    public error(errorCode, message) {
      return {
        error: true,
        errorCode,
        message
      };
    }
    public output(errorCode, data, count = 0) {
      return {
        count,
        data,
        error: false,
        errorCode
      };
    }
  }
  export const responsesHelper = new Responses();