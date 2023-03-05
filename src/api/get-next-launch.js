import { URL_NEXT_LAUNCH } from "./constants.js";

const getNextLaunch = async () => {
  try {
    const response = await fetch(URL_NEXT_LAUNCH);
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

export default getNextLaunch;
