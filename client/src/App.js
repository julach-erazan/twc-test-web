import "./App.css";
import Login from "./routes/pages/Login";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./routes/pages/Register";
import Welcome from "./routes/pages/Welcome";
import Newcontacts from "./routes/pages/Newcontacts";
import Contacts from "./routes/pages/Contacts";

function App() {
  const [id, setId] = useState(1);

  // useEffect(() => {
  //   setId();
  // }, []);

  useEffect(() => {}, []);

  return (
    <div className="App w-screen min-w-[1300px] h-screen">
      <BrowserRouter>
        <Routes>
          {id ? (
            <Route path="/" element={<Welcome />} />
          ) : (
            <Route exact path="/" element={<Login />} />
          )}
          <Route exact path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/contacts/new" element={<Newcontacts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
