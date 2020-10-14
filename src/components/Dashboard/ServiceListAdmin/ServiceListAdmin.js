import React, { useContext, useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
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
          <thead class="thead-dark">
            <tr>
              <th
                style={{ width: "5%" }}
                className="text-white text-left"
                scope="col"
              >
                Sr No
              </th>

              <th style={{ width: "10%" }} className="text-white" scope="col">
                Name
              </th>
              <th style={{ width: "15%" }} className="text-white" scope="col">
                Email ID
              </th>
              <th style={{ width: "18%" }} className="text-white" scope="col">
                Service
              </th>
              <th style={{ width: "40%" }} className="text-white" scope="col">
                Project Details
              </th>
              <th style={{ width: "12%" }} className="text-white" scope="col">
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
                <td>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Done
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#">Pending</Dropdown.Item>
                      <Dropdown.Item href="#">On Going</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ServiceListAdmin;
