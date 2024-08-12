import React from "react";
import { useParams } from "react-router-dom";
import { useGetAllreviewQuery } from "../../../redux/features/review/reviewApi";
import { IReview } from "../../../types";
import ReviewCard from "./review-card";
import ReviewPulseCard from "./review-pulse-card";

interface IProps {}

const ReviewList: React.FC<IProps> = () => {
  const params = useParams();
  const id = params?.slug?.split("_")[params?.slug?.split("_")?.length - 1];
  const { data, isLoading } = useGetAllreviewQuery(id!);

  return (
    <>
      {isLoading ? (
        <div>
          <ReviewPulseCard />
        </div>
      ) : (
        <div className="space-y-4">
          {data?.data?.map((review: IReview) => (
            <ReviewCard key={review._id} {...review} />
          ))}
        </div>
      )}
    </>
  );
};

export default ReviewList;
