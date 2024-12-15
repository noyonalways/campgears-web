"use client";
import { ReactNode } from "react";
import StoreProvider from "./redux.provider";

interface IProps {
  children: ReactNode;
}

const Providers = ({ children }: IProps) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export default Providers;
