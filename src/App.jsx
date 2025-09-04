import { Route, Routes, useNavigate } from "react-router-dom";
import PageCounter from "./pages/PageCounter";
import PageHome from "./pages/PageHome";
import PageReducer from "./pages/PageReducer";
import PageList from "./pages/PageList";
import Login from "./components/Login";
import { useEffect } from "react";
import { useLoginContext } from "./hooks/useLOginContext";
/*
1.if authenticated render page counter
2.otherwise show login page
*/
function App() {
  const { state, setState } = useLoginContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (!state.isLoggedIn) {
      const user = localStorage.getItem("userDetail");
      if (user) {
        setState(JSON.parse(user));
        navigate("/");
      } else {
        navigate("/login");
      }
    }
  }, [state.isLoggedIn]);
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<PageHome />}>
        <Route path="counter" element={<PageCounter />} />
        <Route path="reducer" element={<PageReducer />} />
        <Route path="list" element={<PageList />} />
      </Route>
    </Routes>
  );
}

export default App;
