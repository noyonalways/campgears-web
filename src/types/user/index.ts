export type TAuthProvider = "google" | "github" | "facebook";

export type TLoggedInUser = {
  id: string;
  email: string;
  role: string;
  authProvider?: TAuthProvider;
  exp: number;
  iat: number;
};

export type TSocialLogin = {
  name: string;
  email: string;
  authProvider: TAuthProvider;
  avatar?: string;
};
