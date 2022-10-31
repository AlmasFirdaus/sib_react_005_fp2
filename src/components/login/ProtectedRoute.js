import { useLocation, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let location = useLocation();

  if (localStorage.getItem("login")) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
