import axios from "axios";

const handleRegister = async (email, password) => {
  try {
    const response = await axios //Send data to Backend
      .post("http://localhost:8001/register", {
        email,
        password,
      });
    if (response.status === 201) {
      alert(response.data.message);
      window.location = "/login";
    }
  } catch (error) {
    alert(error.response?.data.message);
  }
};

export { handleRegister };
