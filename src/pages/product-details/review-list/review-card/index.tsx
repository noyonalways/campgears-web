import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { IReview } from "../../../../types";

interface IProps extends IReview {}

const ReviewCard: React.FC<IProps> = ({ comment, createdAt, rating, user }) => {
  return (
    <div className="space-y-4 border-t py-6">
      <div className="flex space-x-4">
        {/* <img src="" alt="" /> */}
        <div className="size-12 bg-slate-300 rounded-full ring-2 ring-offset-2 ring-primary"></div>
        <div className="space-y-1">
          <div className="flex items-center">
            <div className="flex items-center space-x-1">
              <p>By</p>
              <h4 className="font-medium">{user?.fullName}</h4>
            </div>
            <span>, {new Date(createdAt)?.toDateString()}</span>
          </div>
          <div>
            <Rating
              className="max-w-20"
              readOnly
              orientation="horizontal"
              value={rating}
            />
          </div>
        </div>
      </div>
      <p>{comment}</p>
    </div>
  );
};

export default ReviewCard;
