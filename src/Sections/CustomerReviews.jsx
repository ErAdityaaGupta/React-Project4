import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

export default function CustomerReviews() {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers</span> Say?
      </h3>
      <p className="text-center text-slate-gray font-montserrat mt-6 max-w-lg m-auto">
        Hear genioune stories form our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
}
