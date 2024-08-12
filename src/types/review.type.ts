interface IUser {
  fullName: string;
  email: string;
}

export interface IReview {
  _id: string;
  product: string;
  user: IUser;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}

export type TGetAllReviewResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: IReview[];
};
