/*
 * utility/helper methods
 */

const initialState = {
  age: null,
  gender: 'male',
  kilos: null,
  lbs: null,
  centimeters: null,
  inches: null,
  activityLevel: null,
  bodyFat: null
};

const macros = (state = initialState, action) => {
  switch(action.type) {
    case 'COERCE_KILOS':
      return {
        ...state,
        lbs: Number(action.lbs),
        kilos: Math.round(action.lbs / 2.204)
      }
    case 'COERCE_LBS':
      return {
        ...state,
        kilos: Number(action.kilos),
        lbs: Math.round(action.kilos * 2.204)
      }
    case 'COERCE_CENTIMETERS':
      return {
        ...state,
        inches: Number(action.inches),
        centimeters: Math.round(action.inches * 2.54)
      }
    case 'COERCE_INCHES':
      return {
        ...state,
        centimeters: Number(action.centimeters),
        inches: Math.round(action.centimeters / 2.54)
      }
    case 'CHANGE_BODYFAT':
      return {
        ...state,
        bodyFat: Number(action.bodyFat)
      }
    case 'CHANGE_GENDER':
      return {
        ...state,
        gender: action.gender
      }
    case 'CHANGE_AGE':
      return {
        ...state,
        age: Number(action.age)
      }
    case 'ACTIVITY_LEVEL':
      return {
        ...state,
        activityLevel: action.level
      }
    default:
      return state
  }
};

export default macros;
