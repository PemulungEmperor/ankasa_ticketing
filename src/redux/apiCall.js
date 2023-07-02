import axios from "axios";
import { getFlight, getFlightSearch } from "./reducer/flightSlicer";
import { successGet } from "./reducer/userSlicer";
import ankasa_api from "../backend";

export const getFlights = async (dispatch) => {
  try {
    const response = await axios.get(`${ankasa_api}/flight`);
    dispatch(getFlight(response.data));
  } catch (err) {
    dispatch(err);
  }
};

export const getUser = async (id, dispatch) => {
  try {
    const response = await axios.get(`${ankasa_api}/users/${id}`);
    dispatch(successGet(response.data));
  } catch (err) {
    dispatch(err);
  }
};

export const getFlightsSearch = async (search, dispatch) => {
  try {
    const response = await axios.get(`${ankasa_api}/flight/${search}`);
    dispatch(getFlightSearch(response.data));
  } catch (err) {
    dispatch(err);
  }
};
