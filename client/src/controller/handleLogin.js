import axios from "axios";

const handleLogin = async (email, password) => {
  try {
    const response = await axios //Send data to Backend
      .post("http://localhost:8001/login", {
        email,
        password,
      });
    if (response.status === 201) {
      sessionStorage.setItem("id", response.data.id);
      window.location = "/";
    } else {
      window.location = "/login";
    }
  } catch (error) {
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 500
    ) {
      alert(error.response.data.message);
    }
  }
};

export { handleLogin };
