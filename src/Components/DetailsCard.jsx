import React from "react";
import Site1 from "../img/site1.JPG";

const DetailsCard = ({ value }) => {
  return (
    <div className="flex gap-4">
      <img src={Site1} alt="" />
      <div className="p-5">
        <h1>{value}</h1>
        <ul className="ml-8 list-disc text-sm text-blue-600">
          <li>Layer (1)</li>
          <li>SubLayer (3)</li>
        </ul>
      </div>
    </div>
  );
};

export default DetailsCard;
