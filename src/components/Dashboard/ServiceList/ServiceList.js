import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { UserContext } from "../../../App";
import { serviceData } from "../../../fakeData/serviceData";
import ServiceListCard from "../ServiceListCard/ServiceListCard";
import Sidebar from "../Sidebar/Sidebar";

const ServiceList = () => {
  const [servicesList, setServicesList] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:5000/servicesOrdered?email=" + loggedInUser.email)
      .then((res) => res.json())
      .then((data) => setServicesList(data));
  }, []);
  console.log(servicesList);
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
            <ServiceListCard key={srvclst._id} service={srvclst}>
              {srvclst.orderedService}
            </ServiceListCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceList;
