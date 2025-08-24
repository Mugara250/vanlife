import { Outlet, useOutletContext, Navigate } from "react-router-dom";

const AuthRequired = () => {
  const vans = useOutletContext();
  const isLoggedIn = false;
  return (
    <div>
      {!isLoggedIn && <Navigate to="login" />}
      <Outlet context={vans} />
    </div>
  );
};

export default AuthRequired;
