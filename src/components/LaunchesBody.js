import React from "react";
import { Link } from "react-router-dom";

const LaunchesBody = (props) => {
  let success = props.success;
  if (success === true) {
    success = "Yes";
  }
  if (success === false) {
    success = "No";
  }

  let upcoming = props.upcoming;
  if (upcoming === true) {
    upcoming = "Yes";
  }
  if (upcoming === false) {
    upcoming = "No";
  }

  return (
    <tbody>
      <tr>
        <td>{props.flight}</td>
        <td>{props.date}</td>
        <td>
          {" "}
          <Link to={"/rockets/" + props.id}>See rocket</Link>
        </td>
        <td>{props.details}</td>
        <td>{success}</td>
        <td>{upcoming}</td>
      </tr>
    </tbody>
  );
};

export default LaunchesBody;
