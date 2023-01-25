import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/auth/loginin";
import Signup from "./pages/auth/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<Signup />} />
        <Route path="/" element={<Navigate replace to="/login" />} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
