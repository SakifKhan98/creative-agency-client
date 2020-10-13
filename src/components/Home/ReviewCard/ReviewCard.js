import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div
      style={{ paddingRight: 50, paddingLeft: 50 }}
      className="col-md-4 mt-3 "
    >
      <div style={{ margin: 30, padding: 20 }} className="row card ">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-4 ml-auto">
            <img style={{ width: 74 }} src={review.image} alt="" />
          </div>
          <div className="col-md-8">
            <h5 style={{ fontWeight: 800 }} className="">
              {review.name}
            </h5>
            <p>
              <small>{review.job}</small>
            </p>
          </div>
        </div>
        <div className=" card-body text-center">
          <p className="card-text">{review.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
