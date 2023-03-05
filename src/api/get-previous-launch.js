import { URL_PREVIOUS_LAUNCH } from "./constants.js";

const getPreviousLaunch = async () => {
  try {
    const response = await fetch(URL_PREVIOUS_LAUNCH);
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

export default getPreviousLaunch;
