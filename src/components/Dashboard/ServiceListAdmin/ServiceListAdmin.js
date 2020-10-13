import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";

const ServiceListAdmin = () => {
  const [servicesList, setServicesList] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:5000/allServicesOrdered")
      .then((res) => res.json())
      .then((data) => setServicesList(data));
  }, []);
  console.log(servicesList);
  const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: "none",
  };
  return (
    <section style={containerStyle} className="container-fluid row">
      <Sidebar></Sidebar>
      <div style={{ marginTop: 30 }} className=" col">
        <h3 className="text-dark">Services List</h3>
        <table className="table table-borderless">
          <thead>
            <tr>
              <th className="text-secondary text-left" scope="col">
                Sr No
              </th>

              <th className="text-secondary" scope="col">
                Name
              </th>
              <th className="text-secondary" scope="col">
                Email ID
              </th>
              <th className="text-secondary" scope="col">
                Service
              </th>
              <th className="text-secondary" scope="col">
                Project Details
              </th>
              <th className="text-secondary" scope="col">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {servicesList.map((srvclst, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{srvclst.name}</td>
                <td>{srvclst.email}</td>
                <td>{srvclst.orderedService}</td>
                <td>{srvclst.description}</td>
                <td>On Going</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ServiceListAdmin;
