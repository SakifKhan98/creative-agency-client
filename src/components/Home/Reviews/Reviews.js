import React, { useState } from "react";
import { useEffect } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div id="reviews" style={{ marginTop: 60 }}>
      <h1 className="text-center" style={{ fontWeight: 700 }}>
        Clients <span style={{ color: "#7AB259" }}>Feedback</span>
      </h1>
      <div className="row justify-content-around">
        {reviews.map((rvw) => (
          <ReviewCard key={rvw.id} review={rvw}>
            {rvw.name}
          </ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
