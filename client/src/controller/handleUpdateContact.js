import axios from "axios";

const handleUpdateContact = async (
  id,
  userName,
  gender,
  email,
  phoneNumber,
  getData
) => {
  try {
    const response = await axios //Send data to Backend
      .post("http://localhost:8001/updatecontact", {
        id,
        userName,
        gender,
        email,
        phoneNumber,
      });

    if (response.status === 201) {
      // alert(response.data.message);
      getData();
    }
  } catch (error) {
    alert(error.response?.data.message);
  }
};

export { handleUpdateContact };
