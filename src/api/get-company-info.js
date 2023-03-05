import { URL_COMPANY_INFO } from "./constants.js";

const getCompanyInfo = async () => {
  try {
    const response = await fetch(URL_COMPANY_INFO);
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

export default getCompanyInfo;
