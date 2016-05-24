/*
 * utility/helper methods
 */

/**
 * Decides which BMR Equation to use.
 * @param  {object} user - User object from user-form.js submission
 * @return {function} - Either Katch McArdle or Mifflin - St Jeor Formula, depending on omission of body fat percentage.
 */
export function calculateBasalMetabolicRate(user) {
  return (user.bodyFat) ? katchMcArdle(user) : mifflinStJeorEquation(user);
};

/**
 * Formula to calculate Lean Body Mass
 * @param {Number} weight - User bodyweight in metric units
 * @param {Number} bodyFat - User bodyFat percentage
 * @return {Number} Calculated Lean Body Mass from formula.
 */
export function leanBodyMass(weight, bodyFat) {
  // Lean Body Mass = Body Weight – (Body Weight x Body Fat %)
  return weight - (weight * (bodyFat / 100));
};

/**
 * [Mifflin - St Jeor Formula]{@link https://en.wikipedia.org/wiki/Basal_metabolic_rate} for estimating BMR
 * @param  {object} user - User object from user-form.js submission
 * @return {number} Calculated Basal Metabolic Rate from formula.
 */
export function mifflinStJeorEquation(user) {
  // defaults gender modifier to male
  let genderModifier = 5;
  if (user.gender === 'female') genderModifier = Number(-161);
  const weightModifier = 10;
  const heightModifier = 6.25;
  let weight = Number(user.kilos);
  let height = Number(user.centimeters);

  // run equation
  let bmr = (weightModifier * weight) + (heightModifier * height) + (5 * user.age) + genderModifier;
  return Math.round(bmr);
};

/**
 * [Katch-McArdle Formula]{@link https://en.wikipedia.org/wiki/Basal_metabolic_rate} for estimating BMR (requires bodyfat percentage)
 * @param  {object} user - User object from user-form.js submission
 * @return {number} Calculated Basal Metabolic Rate from formula.
 */
export function katchMcArdle(user) {
  let LBM = leanBodyMass(user.kilos, user.bodyFat);
  return Math.round(370 + (21.6 * LBM));
};

const initialState = {
  tdee: 0,
  bmr: 0
};

const macros = (state = initialState, action) => {
  switch(action.type) {
    case 'CALCULATE_BMR':
      return {
        ...state,
        bmr: calculateBasalMetabolicRate(action.user)
      }
    default:
      return state
  }
};

export default macros;
