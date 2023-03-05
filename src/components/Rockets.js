import React, { useEffect, useState } from "react";
import RocketsHeader from "./RocketsHeader";
import RocketsBody from "./RocketsBody";
import getRockets from "../api/get-rockets";
import Loading from "./Loading";

const Rockets = () => {
  const [rockets, setRockets] = useState();
  const [isRockets, setIsRockets] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRockets();
      //console.log(data);
      setRockets(data);
      setIsRockets(true);
    };
    fetchData();
  }, []);

  const Table = (
    <table className="table">
      <RocketsHeader />
      {isRockets &&
        rockets.map((value) => (
          <RocketsBody
            name={value.name}
            firstFlight={value.first_flight}
            stages={value.stages}
            boosters={value.boosters}
            active={value.active}
            link={value.wikipedia}
            id={value.id}
          />
        ))}
    </table>
  );
  return <div>{isRockets ? Table : <Loading />}</div>;
};

export default Rockets;
