import ValidatorResponse, { validStatus } from "./validatorResponseClass";

export default function required(value) {
  if (!value || value.trim().length === 0) {
    return new ValidatorResponse(false, "Обязательное поле");
  }
  return validStatus;
}
