export default class ValidatorResponse {
  constructor(isValid, errorMessage) {
    this.isValid = isValid;
    this.errorMessage = errorMessage;
  }
}

export const validStatus = new ValidatorResponse(true, "");
