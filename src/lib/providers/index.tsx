"use client";
import UserProvider from "@/context/user.context";
import { ReactNode } from "react";
import StoreProvider from "./redux.provider";

interface IProps {
  children: ReactNode;
}

const Providers = ({ children }: IProps) => {
  return (
    <UserProvider>
      <StoreProvider>{children}</StoreProvider>
    </UserProvider>
  );
};

export default Providers;
