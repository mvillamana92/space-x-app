import React, { useEffect, useState } from "react";
import getNextLaunch from "../api/get-next-launch";
import getPreviousLaunch from "../api/get-previous-launch";
import Loading from "./Loading";

const HomePage = () => {
  const [nextLaunch, setNextLaunch] = useState();
  const [isNextLaunchData, setIsNextLaunchData] = useState(false);

  const [prevLaunch, setPrevLaunch] = useState();
  const [isPrevLaunchData, setIsPrevLaunchData] = useState(false);

  useEffect(() => {
    const fetchDataNext = async () => {
      const data = await getNextLaunch();
      setNextLaunch(data);
      setIsNextLaunchData(true);
      //console.log(data);
    };
    fetchDataNext();

    const fetchDataPrev = async () => {
      const data = await getPreviousLaunch();
      setPrevLaunch(data);
      setIsPrevLaunchData(true);
      //console.log(data);
    };
    fetchDataPrev();
  }, []);

  return (
    <div className="row mt-5">
      <div className="col-12">
        <img
          src={require("../logo.jpg")}
          width="300px"
          height="200px"
          alt="Logo"
        />
      </div>
      {isNextLaunchData && isPrevLaunchData ? (
        <div className="col-12 mt-5">
          <div className="card">
            <div className="card-title pt-2">
              <h4>Next Launch:</h4>
            </div>
            <div className="card-body">
              <h5 className="card-text">{nextLaunch.name}</h5>
              <h6 className="card-text">{nextLaunch.date_utc}</h6>
            </div>
          </div>
          <div className="card mt-3">
            <div className="card-title pt-2">
              <h4>Last Launch:</h4>
            </div>
            <div className="card-body">
              <h5 className="card-text">{prevLaunch.name}</h5>
              <h6 className="card-text">{prevLaunch.date_utc}</h6>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default HomePage;
