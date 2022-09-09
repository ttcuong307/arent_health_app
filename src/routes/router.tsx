import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../states/User/userState";

export const ProtectedRoute = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const user = useRecoilValue(userState);

  //Check if User Login or not, If not redirect User into Login Page

  // if (!user) {
  //   return <Navigate to="/auth/login" />;
  // }

  return <>{children}</>;
};

export const PublicRoute = ({ children }: { children?: React.ReactNode }) => {
  return <>{children}</>;
};
