import React, { useEffect, useState } from "react";
import getLaunches from "../api/get-launches";
import LaunchesHeader from "./LaunchesHeader";
import LaunchesBody from "./LaunchesBody";
import Loading from "./Loading";

const Launches = () => {
  const [launches, setLaunches] = useState();
  const [isLaunches, setIsLaunches] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLaunches();
      //console.log(data);
      setLaunches(data);
      setIsLaunches(true);
    };
    fetchData();
  }, []);

  const Table = (
    <table className="table">
      <LaunchesHeader />
      {isLaunches &&
        launches.map((value) => (
          <LaunchesBody
            flight={value.flight_number}
            date={value.date_utc}
            details={value.details}
            success={value.success}
            upcoming={value.upcoming}
            id={value.rocket}
          />
        ))}
    </table>
  );
  return <div>{isLaunches ? Table : <Loading />}</div>;
};

export default Launches;
