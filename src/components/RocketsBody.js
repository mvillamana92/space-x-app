import React from "react";
import { Link } from "react-router-dom";

const RocketsBody = (props) => {
  let active = props.active;
  if (active === true) {
    active = "Yes";
  }
  if (active === false) {
    active = "No";
  }
  return (
    <tbody>
      <tr>
        <td>
          {" "}
          <Link to={"/rockets/" + props.id}>{props.name}</Link>
        </td>
        <td>{props.firstFlight}</td>
        <td>{props.stages}</td>
        <td>{props.boosters}</td>
        <td>{active}</td>
        <td>
          <a href={props.link}>Wikipedia</a>
        </td>
      </tr>
    </tbody>
  );
};

export default RocketsBody;
