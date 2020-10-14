import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { UserContext } from "../../../App";
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
  const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: "none",
  };
  return (
    <div>
      <section style={containerStyle} className="container-fluid row">
        <Sidebar></Sidebar>
        <div className="col-lg-6">
          <div className="row mb-5 justify-content-md-center">
            <center>
              <h1 className="mt-5 text-center">Ordered Services</h1>
            </center>
          </div>
          <div className="row">
            {servicesList.map((srvclst) => (
              <ServiceListCard key={srvclst._id} service={srvclst}>
                {srvclst.orderedService}
              </ServiceListCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceList;
