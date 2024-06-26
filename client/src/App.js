import "./App.css";
import Login from "./routes/pages/Login";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./routes/pages/Register";
import Welcome from "./routes/pages/Welcome";
import Newcontacts from "./routes/pages/Newcontacts";
import Contacts from "./routes/pages/Contacts";

function App() {
  const [id, setId] = useState(null);//login id

  useEffect(() => {
    setId(sessionStorage.getItem("id"));//Set id
  }, []);

  const handleLogOut = () => {
    sessionStorage.removeItem("id");
    window.location = "/login";
  };

  return (
    <div className="App w-screen min-w-[1300px] h-screen">
      <BrowserRouter>
        <Routes>
          {id ? (
            <Route path="/" element={<Welcome onLogOut={handleLogOut} />} />
          ) : (
            <Route exact path="/" element={<Login />} />
          )}
          <Route exact path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {id && <Route path="/contacts" element={<Contacts />} />}
          {id && <Route path="/contacts/new" element={<Newcontacts />} />}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
