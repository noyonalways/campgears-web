export type TErrorMessages = {
  path: string | number;
  message: string;
}[];

export type TGenericErrorResponse = {
  status: number;
  data: {
    statusCode: number;
    message: string;
    errorMessages: TErrorMessages;
  };
};
