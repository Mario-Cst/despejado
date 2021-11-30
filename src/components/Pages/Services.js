import React, { useState, useEffect } from "react";
import ServiceCard from "../Service/ServiceCard";
import "./service.css";
import { base } from "../airtable/airtable-config";

const Services = () => {
  const [services, setSrevices] = useState([]);
  const [myID, setMyId] = useState();

  useEffect(() => {
    base("Montaje")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        console.log(records);
        setSrevices(records);
        fetchNextPage();
      });
  }, []);

  return (
    <div className="service">
      <div className="service-title">
        <h2>Servicios</h2>
      </div>
      <div className="service-dash">
        {services.map((service) => {
          return (
            <ServiceCard
              key={service.fields.id}
              name={service.fields.nameLoc}
              dirloc={service.fields.Direccion}
              dirdate={service.fields.Comentarios}
              myid={service.id}
              setMyId={service.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
