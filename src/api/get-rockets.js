import { URL_ROCKETS } from "./constants.js";

const getRockets = async () => {
  try {
    const response = await fetch(URL_ROCKETS);
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

export default getRockets;
