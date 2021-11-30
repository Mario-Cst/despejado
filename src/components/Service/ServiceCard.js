import React from "react";

import "./service.css";

const ServiceCard = ({ name, dirloc, dirdate, myid }) => {
  return (
    <div className="card" onClick={() => console.log(myid)}>
      <div className="card-title">{name} </div>
      <div className="card-content">
        Card info
        <div>
          {dirloc}, {dirdate}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
