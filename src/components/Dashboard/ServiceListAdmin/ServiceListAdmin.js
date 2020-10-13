import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const ServiceListAdmin = () => {
  const containerStyle = {
    backgroundColor: "#F4F7FC",
    border: "none",
  };
  return (
    <section style={containerStyle} className="container-fluid row">
      <Sidebar></Sidebar>
      <div style={{ marginTop: 30 }} className="col-lg-6">
        <h3 className="text-dark">Services List</h3>
        <table className="table table-borderless">
          <thead>
            <tr>
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
            {/* {appointments.map((appointment, index) => ( */}
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Service</td>
              <td>Project Details</td>
              <td>Status</td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ServiceListAdmin;
