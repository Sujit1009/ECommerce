import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Registration from "./Components/Registration";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/register" element={<Registration />} />
    </Routes>
  );
}

export default App;
