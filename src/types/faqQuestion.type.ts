type TFaqQuestion = {
  _id: string;
  question: string;
  answer: string;
};

export type TGetAllFaqQuestionResponse = {
  success: boolean;
  statusCode: number;
  message: string;
  data: TFaqQuestion[];
};
