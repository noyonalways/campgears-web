import React from "react";
import { IReview, TGetAllReviewResponse } from "../../../types";
import ReviewCard from "./review-card";
import ReviewPulseCard from "./review-pulse-card";

interface IProps {
  data: TGetAllReviewResponse;
  isLoading: boolean;
}

const ReviewList: React.FC<IProps> = ({ data, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div>
          <ReviewPulseCard />
        </div>
      ) : (
        <div className="space-y-4">
          {data?.data.map((review: IReview) => (
            <ReviewCard key={review._id} {...review} />
          ))}
        </div>
      )}
    </>
  );
};

export default ReviewList;
