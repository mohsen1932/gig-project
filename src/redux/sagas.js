import { put, takeLatest, call, select } from "redux-saga/effects";
import * as actions from "./actions";
import * as constants from "./constants";
import * as service from "../utils/services/index";
import * as helpers from "../utils/helpers/helpers";

const getLanguage = state => state.app.language;
const getOffices = state => state.app.offices;
const getCompanyValues = state => state.app.company_values;
export function* getCompanyValuesList() {
  try {
    yield put(actions.companyValuesLoading(true));
    const language = yield select(getLanguage);
    const response = yield call(
      service.getRequest,
      `company-values?language=${language}`
    );
    const data = response.data.map(item => ({
      id: item.id,
      title: item.title,
      description: item.description,
      color: `color-${item.id + 5}`
    }));
    yield put(actions.setCompanyValues(data));
  } catch (error) {
    yield put(actions.companyValuesFailure(true));
  } finally {
    yield put(actions.companyValuesLoading(false));
  }
}
export function* getCompanyValuesListSaga() {
  yield takeLatest(constants.COMPANY_VALUES_GET_ITEMS, getCompanyValuesList);
}
export function* getOfficesList() {
  try {
    yield put(actions.officesLoading(true));
    const response = yield call(service.getRequest, "offices");
    const data = response.data.map(item => ({
      id: item.id,
      country: item.country,
      address: item.address,
      color: `color-${item.id}`
    }));
    yield put(actions.setOffices(data));
  } catch (error) {
    yield put(actions.officesFailure(true));
  } finally {
    yield put(actions.officesLoading(false));
  }
}
export function* getOfficesListSaga() {
  yield takeLatest(constants.OFFICES_GET_ITEMS, getOfficesList);
}
export function* randomizeColors() {
  const offices = yield select(getOffices);
  const newOffices = offices.length > 0 ? helpers.randomizeColors(offices) : [];
  yield put(actions.setOffices([]));
  yield put(actions.setOffices(newOffices));
  const companyValues = yield select(getCompanyValues);
  const newCompanyValues =
    companyValues.length > 0 ? helpers.randomizeColors(companyValues) : [];
  yield put(actions.setCompanyValues([]));
  yield put(actions.setCompanyValues(newCompanyValues));
}
export function* randomizeColorsSaga() {
  yield takeLatest(constants.RANDOMIZE_COLORS, randomizeColors);
}
export default [
  getCompanyValuesListSaga(),
  getOfficesListSaga(),
  randomizeColorsSaga()
];
