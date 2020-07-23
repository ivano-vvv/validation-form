import { validStatus } from "./validatorResponseClass";

export default function combineValidators(validatorsArr, value) {
  for (let validator of validatorsArr) {
    let vResult = validator(value);

    if (!vResult.isValid) {
      return vResult;
    }
  }

  return validStatus;
}
