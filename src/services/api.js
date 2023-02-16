import axios from "axios";
import {BASE_URL, COUNTRIES, STATES} from "./paths"

export const getCountryData = async () => {
    try {
      const resp = await axios.get(`${BASE_URL}${COUNTRIES}`);
      return resp;
    } catch (error) {
      console.log(error.message);
    }
};

export const getStateData = async () => {
try {
    const resp = await axios.get(`${BASE_URL}${STATES}`);
    return resp;
} catch (error) {
    console.log(error.message);
}
};