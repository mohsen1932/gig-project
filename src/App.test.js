import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

describe("AppBundle", () => {
  test("renders without crashing", () => {
    const AppBundle = (
      <Provider store={store}>
        <App />
      </Provider>
    );
    const div = document.createElement("div");
    ReactDOM.render(AppBundle, div);
  });
});
