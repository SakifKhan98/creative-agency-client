import React, { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services" style={{ marginTop: 60 }}>
      <h1 className="text-center" style={{ fontWeight: 700 }}>
        Provide awesome <span style={{ color: "#7AB259" }}>services</span>{" "}
      </h1>
      <div className="row justify-content-around">
        {services.map((srvc) => (
          <ServiceCard key={srvc.id} service={srvc}>
            {srvc.name}
          </ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;