import axios from "axios";

export const getCountryData = async () => {
    try {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5"
      );
      return resp;
    } catch (error) {
      console.log(error.message);
    }
};

export const getStateData = async () => {
try {
    const resp = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_page=1&_limit=5"
    );
    return resp;
} catch (error) {
    console.log(error.message);
}
};