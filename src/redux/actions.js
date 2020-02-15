import * as constants from "./constants";

export const getCompanyValues = () => ({
  type: constants.COMPANY_VALUES_GET_ITEMS,
  payload: {}
});
export const setCompanyValues = company_values => ({
  type: constants.COMPANY_VALUES_SET_ITEMS,
  payload: {
    company_values
  }
});
export const companyValuesFailure = company_values_failure => ({
  type: constants.COMPANY_VALUES_FAILURE,
  payload: {
    company_values_failure
  }
});
export const companyValuesLoading = company_values_loading => ({
  type: constants.COMPANY_VALUES_LOADING,
  payload: {
    company_values_loading
  }
});
export const getOffices = () => ({
  type: constants.OFFICES_GET_ITEMS,
  payload: {}
});
export const setOffices = offices => ({
  type: constants.OFFICES_SET_ITEMS,
  payload: {
    offices
  }
});
export const officesFailure = offices_failure => ({
  type: constants.OFFICES_FAILURE,
  payload: {
    offices_failure
  }
});
export const officesLoading = offices_loading => ({
  type: constants.OFFICES_LOADING,
  payload: {
    offices_loading
  }
});
export const setLanguage = language => ({
  type: constants.SET_LANGUAGE,
  payload: {
    language
  }
});
export const setRotate = rotate => ({
  type: constants.SET_ROTATE,
  payload: {
    rotate
  }
});
export const setMonochrome = monochrome => ({
  type: constants.SET_MONOCHROME,
  payload: {
    monochrome
  }
});
export const randomizeColors = () => ({
  type: constants.RANDOMIZE_COLORS,
  payload: {}
});
