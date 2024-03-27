import axios from "axios";

const handleAddContact = async (
  userName,
  email, 
  phoneNumber, 
  gender
) => {
  try {

    console.log(gender)

    const response = await axios //Send data to Backend
      .post("http://localhost:8001/addcontact",{ 
      userName,
      email, 
      phoneNumber, 
      gender}
      );

    if (response.status === 201) {
      alert(response.data.message);
    }
  } catch (error) {
    alert(error.response?.data.message);
  }
};

export { handleAddContact };
