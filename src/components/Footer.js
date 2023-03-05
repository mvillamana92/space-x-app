import React, { useState, useEffect } from "react";
import getCompanyInfo from "../api/get-company-info";

const Footer = () => {
  const [companyInfo, setCompanyInfo] = useState();
  const [isInfo, setIsInfo] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCompanyInfo();
      setCompanyInfo(data);
      setIsInfo(true);
      //console.log(data);
    };
    fetchData();
  }, []);

  return (
    <footer className="mt-5">
      {isInfo && (
        <div className="footer row align-items-center justify-content-center">
          <div className="col-3 d-flex flex-column justify-content-center mt-2">
            <h4>{companyInfo.name}</h4>
            <p className="company-valuation">
              Valuation: {companyInfo.valuation}
            </p>
          </div>

          <div className="col-5 mt-2">
            <p className="footer-summary text-justify">{companyInfo.summary}</p>
          </div>

          <div className="col-3 mt-2">
            <p>
              {companyInfo.headquarters.address} -{" "}
              {companyInfo.headquarters.city} - {companyInfo.headquarters.state}{" "}
              (USA)
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
