import { runSaga } from "redux-saga";
import { getCompanyValuesList, getOfficesList, randomizeColors } from "./sagas";
import * as actions from "./actions";
import * as services from "../utils/services/";

describe("Sagas", () => {
  test("getCompanyValuesList", async () => {
    services.getRequest = jest.fn(() =>
      Promise.resolve({
        data: []
      })
    );
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          company_values: [],
          offices: [],
          company_values_failure: false,
          company_values_loading: false,
          offices_failure: false,
          offices_loading: false,
          language: "en",
          rotate: false,
          monochrome: false
        }
      }),
      dispatch: action => dispatchedActions.push(action)
    };
    await runSaga(fakeStore, getCompanyValuesList, actions.getCompanyValues)
      .done;
    expect(services.getRequest.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(
      actions.companyValuesLoading(true)
    );
    expect(dispatchedActions).toContainEqual(actions.setCompanyValues([]));
    expect(dispatchedActions).toContainEqual(
      actions.companyValuesLoading(false)
    );
  });
  test("getOfficesList", async () => {
    services.getRequest = jest.fn(() =>
      Promise.resolve({
        data: []
      })
    );
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          company_values: [],
          offices: [],
          company_values_failure: false,
          company_values_loading: false,
          offices_failure: false,
          offices_loading: false,
          language: "en",
          rotate: false,
          monochrome: false
        }
      }),
      dispatch: action => dispatchedActions.push(action)
    };
    await runSaga(fakeStore, getOfficesList, actions.getOffices).done;
    expect(services.getRequest.mock.calls.length).toBe(1);
    expect(dispatchedActions).toContainEqual(actions.officesLoading(true));
    expect(dispatchedActions).toContainEqual(actions.setOffices([]));
    expect(dispatchedActions).toContainEqual(actions.officesLoading(false));
  });
  test("randomizeColors", async () => {
    let dispatchedActions = [];
    const fakeStore = {
      getState: () => ({
        app: {
          company_values: [],
          offices: [],
          company_values_failure: false,
          company_values_loading: false,
          offices_failure: false,
          offices_loading: false,
          language: "en",
          rotate: false,
          monochrome: false
        }
      }),
      dispatch: action => dispatchedActions.push(action)
    };
    await runSaga(fakeStore, randomizeColors, actions.randomizeColors).done;
    expect(dispatchedActions).toContainEqual(actions.setOffices([]));
    expect(dispatchedActions).toContainEqual(actions.setCompanyValues([]));
  });
});
