import React from "react";

const LaunchesHeader = () => {
  return (
    <thead>
      <tr>
        <th scope="col">Flight Number</th>
        <th scope="col">Date (UTC)</th>
        <th scope="col">Rocket</th>
        <th scope="col">Details</th>
        <th scope="col">Success</th>
        <th scope="col">Upcoming</th>
      </tr>
    </thead>
  );
};

export default LaunchesHeader;
