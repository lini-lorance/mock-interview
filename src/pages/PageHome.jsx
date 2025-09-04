import { Link, Outlet, useNavigate } from "react-router-dom";
import { useLoginContext } from "../hooks/useLOginContext";
import { useEffect } from "react";
import { useLoginTimeContext } from "../hooks/useUsetLoginLogoutContext";

export default function PageHome() {
  const { state, logout } = useLoginContext();
  const { date } = useLoginTimeContext();

  const navigate = useNavigate();
  useEffect(() => {
    if (state.isLoggedIn) {
      localStorage.setItem("userDetail", JSON.stringify(state));
    } else {
      navigate("/login");
    }
  }, [state.isLoggedIn]);
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          height: "60px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/reducer">Reducer</Link>
        <Link to="/list">List</Link>
        <button onClick={logout}>{state?.username}</button>
        {date.loginData && <p>Last Login: {date.loginData}</p>}
        {date.logoutData && <p>Last Logout: {date.logoutData}</p>}
      </div>
      <Outlet />
    </div>
  );
}
