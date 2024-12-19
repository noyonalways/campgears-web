export type TGender = "male" | "female" | "others";

export interface IProfile {
  _id: string;
  user: IUser;
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
}

export interface IUser {
  email: string;
  password: string;
  status: TUserStatus;
  role: TUserRole;
  isDeleted: boolean;
  needsPasswordChange?: boolean;
  passwordChangeAt?: Date;
}

export type TUserStatus = "active" | "inactive" | "blocked";
export type TUserRole = "super-admin" | "admin" | "user";

export interface IUser {
  email: string;
  password: string;
  status: TUserStatus;
  role: TUserRole;
  isDeleted: boolean;
  needsPasswordChange?: boolean;
  passwordChangeAt?: Date;
}
