import React from "react";
import headerImg from "../../../images/logos/frame.png";
import "./HeaderContents.css";

const HeaderContents = () => {
  return (
    <section className="row d-flex align-items-center">
      <div style={{ paddingRight: 50 }} className="col-md-5">
        <h1 style={{ fontSize: 50, fontWeight: 700 }}>
          Let's Grow Your <br />
          Brand To The <br />
          Next Level{" "}
        </h1>
        <p>
          <small>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed,
            atque. Blanditiis expedita id accusamus aliquam! Recusandae sed
            iusto quas, fugiat ut fuga suscipit tempore libero, inventore esse
            id repudiandae itaque.
          </small>
        </p>
        <button className="btn-brand text-white">Hire Us</button>
      </div>
      <div className="col-md-7 pl-5">
        <img className="frame img-fluid" src={headerImg} alt="" />
      </div>
    </section>
  );
};

export default HeaderContents;
