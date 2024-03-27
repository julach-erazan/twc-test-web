import "./App.css";
import Login from "./routes/pages/Login";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./routes/pages/Register";
import Welcome from "./routes/pages/Welcome";
import Newcontacts from "./routes/pages/Newcontacts";

function App() {
  const [id, setId] = useState(null);

  useEffect(() => {}, []);

  return (
    <div className="App w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts/new" element={<Newcontacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
