import React from "react";
import { Link } from "react-router-dom";
import "./ServiceCard.css";

const ServiceCard = (props) => {
  const { image, name, description, id } = props.service;
  return (
    <div
      style={{ paddingRight: 50, paddingLeft: 50 }}
      className="col-md-4 mx-auto"
    >
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={"/serviceRegister/" + id}
      >
        <div
          style={{ margin: 30, padding: 20 }}
          className="row card text-center service-card"
        >
          <img style={{ width: 74 }} className="mx-auto" src={image} alt="" />
          <div className=" card-body">
            <h5 style={{ fontWeight: 800 }} className="card-title">
              {name}
            </h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
