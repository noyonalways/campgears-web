export type TGender = "male" | "female" | "others";

export type TProfile = {
  _id: string;
  user: TUser;
  name: string;
  email: string;
  phone: string;
  address: string;
  gender: TGender;
  avatar: string;
  dateOfBirth?: Date;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TUserStatus = "active" | "inactive" | "blocked";
export type TUserRole = "super-admin" | "admin" | "user";

export type TUser = {
  email: string;
  password: string;
  status: TUserStatus;
  role: TUserRole;
  isDeleted: boolean;
  needsPasswordChange?: boolean;
  passwordChangeAt?: Date;
};
