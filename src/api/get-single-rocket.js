import { URL_ROCKETS } from "./constants.js";

const getSingleRocket = async (id) => {
  const URL_SINGLE_ROCKET = URL_ROCKETS + "/" + id;
  try {
    const response = await fetch(URL_SINGLE_ROCKET);
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

export default getSingleRocket;
