import React, { useState } from "react";
import { useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";

const User = ({ onUpdateContact, onDeleteContact }) => {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(null);

  // Call getData function
  useEffect(() => {
    getData();
  }, []);

  // Get all Contacts from backend
  const getData = () => {
    try {
      fetch("http://localhost:8001/viewcontact")
        .then((res) => res.json())
        .then((data) => {
          setData(data.data);
        });
    } catch (error) {
      return;
    }
  };

  const handleEdit = (id) => {
    setEditId(id);
  };

  //Update Contact
  const handleSave = (id) => {
    const userName = document.getElementById("userName").value;
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    onUpdateContact(id, userName, gender, email, phoneNumber, getData);
    setEditId(null);
  };

  const handleGender = (gender) => {
    if (gender === "male") {
      document.getElementById("gender").value = "female";
    } else {
      document.getElementById("gender").value = "male";
    }
  };

  //Delete Contact
  const handleDelete = (id, userName) => {
    onDeleteContact(id, userName, getData);
  };

  return (
    <div className="w-full h-full p-[10px]">
      <table className="w-full text-[#083F46]">
        <thead>
          <tr className="w-full h-[50px]">
            <th className="px-3 py-2 whitespace-wrap"></th>
            <th>
              <h1 className="font-bold">full name</h1>
            </th>
            <th className="px-3 py-2 whitespace-wrap">
              <h1 className="font-bold">gender</h1>
            </th>
            <th className="px-3 py-2 whitespace-wrap">
              <h1 className="font-bold">e-mail</h1>
            </th>
            <th className="px-3 py-2 whitespace-wrap">
              <h1 className="font-bold">phone number</h1>
            </th>
            <th className="px-3 py-2 whitespace-wrap"></th>
          </tr>
        </thead>

        <tbody>
          {data.map((d) => (
            <tr key={d._id} className="font-semibold">
              <td className="w-[50px] flex justify-center items-center">
                <img
                  src={
                    d.gender === "male" ? "/Images/boy.jpg" : "/Images/girl.jpg"
                  }
                  alt={d.gender === "male" ? "male-icon" : "female-icon"}
                  className="w-[40px] h-[40px] rounded-[50%]"
                />
              </td>
              <td className="px-3 py-2 whitespace-wrap">
                {editId === d._id ? (
                  <input
                    id="userName"
                    type="text"
                    defaultValue={d.userName}
                    className="w-[90%] bg-[#d9dfdf] px-[5px]"
                  />
                ) : (
                  <span>{d.userName}</span>
                )}
              </td>
              <td className="px-3 py-2 whitespace-wrap">
                {editId === d._id ? (
                  <div className="w-[100%] flex justify-center items-center">
                    <input
                      id="gender"
                      type="text"
                      defaultValue={d.gender}
                      className="w-[40%] bg-[#d9dfdf] px-[5px]"
                      disabled
                    />
                    <button
                      className="w-[20%] h-[24px] bg-[#d9dfdf] flex justify-center items-center"
                      onClick={() =>
                        handleGender(document.getElementById("gender").value)
                      }
                    >
                      <GrUpdate />
                    </button>
                  </div>
                ) : (
                  <span>{d.gender}</span>
                )}
              </td>
              <td className="px-3 py-2 whitespace-wrap">
                {editId === d._id ? (
                  <input
                    id="email"
                    type="email"
                    defaultValue={d.email}
                    className="w-[90%] bg-[#d9dfdf] px-[5px]"
                  />
                ) : (
                  <span>{d.email}</span>
                )}
              </td>
              <td className="px-3 py-2 whitespace-wrap">
                {editId === d._id ? (
                  <input
                    id="phoneNumber"
                    type="text"
                    defaultValue={d.phoneNumber}
                    className="w-[90%] bg-[#d9dfdf] px-[5px]"
                  />
                ) : (
                  <span>{d.phoneNumber}</span>
                )}
              </td>
              <td className="px-3 py-2 whitespace-wrap">
                {editId === d._id ? (
                  <button
                    className="w-[60px] h-[30px] text-[#fff] rounded-[15px] bg-[#083F46]"
                    onClick={() => handleSave(d._id)}
                  >
                    Save
                  </button>
                ) : (
                  <div className="w-full flex justify-between items-center">
                    <button
                      className="w-[50%] text-[20px] rounded-[5px] flex justify-center items-center"
                      onClick={() =>
                        editId === d._id ? handleSave(d._id) : handleEdit(d._id)
                      }
                    >
                      <MdEdit />
                    </button>

                    <button
                      className="w-[50%] text-[20px] rounded-[5px] flex justify-center items-center"
                      onClick={() => handleDelete(d._id, d.userName)}
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
