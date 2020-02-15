import * as constants from "./constants";
const initial = {
  company_values: [],
  offices: [],
  company_values_failure: false,
  company_values_loading: false,
  offices_failure: false,
  offices_loading: false,
  language: "en",
  rotate: false,
  monochrome: false
};
function reducer(state = initial, action) {
  switch (action.type) {
    case constants.SET_MONOCHROME:
      return { ...state, ...action.payload };
    case constants.SET_ROTATE:
      return { ...state, ...action.payload };
    case constants.SET_LANGUAGE:
      return { ...state, ...action.payload };
    case constants.OFFICES_SET_ITEMS:
      return { ...state, ...action.payload };
    case constants.OFFICES_LOADING:
      return { ...state, ...action.payload };
    case constants.OFFICES_FAILURE:
      return { ...state, ...action.payload };
    case constants.COMPANY_VALUES_SET_ITEMS:
      return { ...state, ...action.payload };
    case constants.COMPANY_VALUES_LOADING:
      return { ...state, ...action.payload };
    case constants.COMPANY_VALUES_FAILURE:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
export default reducer;
