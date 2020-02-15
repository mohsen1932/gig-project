import axios from "axios";
import * as config from "../config";

axios.defaults.baseURL = config.API_BASE_URL;
axios.defaults.headers.common["Accept"] =
  "application/vnd.github.mercy-preview+json";
axios.defaults.headers.common["token"] = config.TOKEN;
export const getRequest = query =>
  axios.get(query).catch(error => {
    throw error;
  });
