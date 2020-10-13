import React, { useState } from "react";
import { serviceData } from "../../../fakeData/serviceData";
import ServiceListCard from "../ServiceListCard/ServiceListCard";
import Sidebar from "../Sidebar/Sidebar";

const ServiceList = () => {
  const [servicesList, setServicesList] = useState(serviceData);

  const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: "none",
  };
  return (
    <div>
      <section style={containerStyle} className="container-fluid row">
        <Sidebar></Sidebar>

        <div className="row col-lg-8">
          {servicesList.map((srvclst) => (
            <ServiceListCard key={srvclst.id} service={srvclst}>
              {srvclst.name}
            </ServiceListCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceList;
