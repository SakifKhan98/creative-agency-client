import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import logo from "../../../images/logos/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faSignOutAlt,
  faCalendar,
  faHome,
  faGripHorizontal,
  faUserPlus,
  faUsers,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import { UserContext } from "../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  //   const [isDoctor, setIsDoctor] = useState(false);

  //   useEffect(() => {
  //     fetch("https://still-basin-91522.herokuapp.com/isDoctor", {
  //       method: "POST",
  //       headers: { "content-type": "application/json" },
  //       body: JSON.stringify({ email: loggedInUser.email }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => setIsDoctor(data));
  //   }, []);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <Link to="/">
          <img style={{ marginBottom: 30 }} src={logo} alt="" />
        </Link>

        <li>
          <Link to="/dashboard" className="text-white">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        {/* {isDoctor && ( */}
        <div>
          <li>
            <Link to="/order" className="text-white">
              <FontAwesomeIcon icon={faCalendar} /> <span>Order</span>
            </Link>
          </li>
          <li>
            <Link to="/serviceList" className="text-white">
              <FontAwesomeIcon icon={faUsers} /> <span>Service List</span>
            </Link>
          </li>
          <li>
            <Link to="/postReview" className="text-white">
              <FontAwesomeIcon icon={faFileAlt} /> <span>Review</span>
            </Link>
          </li>
          <li>
            <Link to="/serviceListAdmin" className="text-white">
              <FontAwesomeIcon icon={faList} /> <span>Service List Admin</span>
            </Link>
          </li>
          <li>
            <Link to="/addService" className="text-white">
              <FontAwesomeIcon icon={faUserPlus} /> <span>Add Service</span>
            </Link>
          </li>
          <li>
            <Link to="/makeAdmin" className="text-white">
              <FontAwesomeIcon icon={faCog} /> <span>Make Admin</span>
            </Link>
          </li>
        </div>
        {/* )} */}
      </ul>
      <div>
        <Link to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;