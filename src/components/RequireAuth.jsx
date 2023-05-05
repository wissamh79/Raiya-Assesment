import { Navigate, Outlet } from "react-router-dom";
import { useApp } from "../context";

const RequireAuth = () => {
  const { state } = useApp();
  console.log(state.auth);

  return state.auth ? <Outlet /> : <Navigate to="/" />;
};
export default RequireAuth;
