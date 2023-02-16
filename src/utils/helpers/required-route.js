import { Navigate } from "react-router-dom";

export const RequiredRoute = ({
  children,
}) => {
  let token = localStorage.getItem("Thembani-TKN-auth");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};


export const CheckToken = ({
  children,
}) => {
    let token = localStorage.getItem("Thembani-TKN-auth");

  if (!token) {
    return children;
  }

  return <Navigate to="/" />;
};

