import { URL_LAUNCHES } from "./constants.js";

const getLaunches = async () => {
  try {
    const response = await fetch(URL_LAUNCHES);
    if (!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();
    //console.log(data);
    return data;
  } catch (error) {
    //console.log(error);
    return "Error";
  }
};

export default getLaunches;
