interface IUser {
  fullName: string;
  email: string;
}

interface IReview {
  product: string;
  user: IUser;
  rating: number;
  comment: string;
}

export type TGetAllReviewResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: IReview[];
};
