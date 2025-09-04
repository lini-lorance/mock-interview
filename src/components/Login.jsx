import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLoginTimeContext } from "../hooks/useUsetLoginLogoutContext";
import { useLoginContext } from "../hooks/useLOginContext";

export default function Login() {
  const { state, setState } = useLoginContext();
  const [signIn, setSignIn] = useState({
    errorMessage: null,
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { handleSessionStorage } = useLoginTimeContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignIn({ ...signIn, [name]: value });
  };

  const onsubmit = () => {
    if (signIn.username === "admin" && signIn.password === "admin") {
      setState({ isLoggedIn: true, username: signIn.username });
      handleSessionStorage("login");
      navigate("/");
    } else {
      setSignIn({ ...signIn, errorMessage: "Invalid Credentials" });
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form className="row g-3 needs-validation" novalidate>
        <div className="card" style={{ width: "350px" }}>
          <div className="card-body">
            <h5 className="card-title">Login</h5>
            <div className="mb-3">
              {signIn.errorMessage && (
                <div className="text-danger">{signIn.errorMessage}</div>
              )}
              <label for="formGroupExampleInput" className="form-label">
                User Name
              </label>
              <input
                name="username"
                value={signIn.username}
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="User Name"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mb-3">
              <label for="formGroupExampleInput2" className="form-label">
                Password
              </label>
              <input
                name="password"
                value={signIn.password}
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Password"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onsubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
