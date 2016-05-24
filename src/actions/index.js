/*
 * action types
 */
export const CALCULATE_BMR = 'CALCULATE_BMR';
export const CHANGE_TDEE = 'CHANGE_TDEE';
export const COERCE_KILOS = 'COERCE_KILOS';
export const COERCE_LBS = 'COERCE_LBS';
export const COERCE_CENTIMETERS = 'COERCE_CENTIMETERS';
export const COERCE_INCHES = 'COERCE_INCHES';
export const CHANGE_BODYFAT = 'CHANGE_BODYFAT';
export const CHANGE_GENDER = 'CHANGE_GENDER';
export const CHANGE_AGE = 'CHANGE_AGE';
export const ACTIVITY_LEVEL = 'ACTIVITY_LEVEL';

/*
 * action creators
 */

export function calculateBMR(user) {
  return {
    type: CALCULATE_BMR,
    user
  };
};

export function coerceKilos(lbs) {
  return {
    type: COERCE_KILOS,
    lbs
  }
};

export function coerceLBS(kilos) {
  return {
    type: COERCE_LBS,
    kilos
  }
};

export function coerceInches(centimeters) {
  return {
    type: COERCE_INCHES,
    centimeters
  }
};

export function coerceCentimeters(inches) {
  return {
    type: COERCE_CENTIMETERS,
    inches
  }
};

export function changeBodyFat(bodyFat) {
  return {
    type: CHANGE_BODYFAT,
    bodyFat
  }
};

export function changeGender(gender) {
  return {
    type: CHANGE_GENDER,
    gender
  }
};

export function changeAge(age) {
  return {
    type: CHANGE_AGE,
    age
  }
};

export function changeActivityLevel(level) {
  return {
    type: ACTIVITY_LEVEL,
    level
  }
};
