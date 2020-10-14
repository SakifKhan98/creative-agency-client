import React from "react";
import slack from "../../../images/logos/slack.png";
import google from "../../../images/logos/google.png";
import uber from "../../../images/logos/uber.png";
import netflix from "../../../images/logos/netflix.png";
import airbnb from "../../../images/logos/airbnb.png";
import "./brands.css";
import { Link } from "react-router-dom";

const Brands = () => {
  return (
    <div style={{ marginTop: 60, marginBottom: 140 }} className="container ">
      <div className="row">
        <div className="col">
          <Link>
            <img src={slack} alt="" />
          </Link>
        </div>
        <div className="col">
          <Link>
            <img src={google} alt="" />
          </Link>
        </div>
        <div className="col">
          <Link>
            <img src={uber} alt="" />
          </Link>
        </div>
        <div className="col">
          <Link>
            <img src={netflix} alt="" />
          </Link>
        </div>
        <div className="col">
          <Link>
            <img src={airbnb} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brands;
