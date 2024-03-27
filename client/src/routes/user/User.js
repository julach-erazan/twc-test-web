import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

const User = ({ onUpdateStudent, onDeleteContact }) => {
  const [data, setData] = useState([]);
  const [userIcon, setUserIcon] = useState();

  const getData = () => {
    try {
      fetch("http://localhost:8001/viewcontact")
        .then((res) => res.json())
        .then((data) => {
          setData(data.data)
          sessionStorage.setItem("id", data.data._id)
      });

    } catch (error) {
      alert(error.response?.data.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full h-full p-[10px]">
      <table className="w-full text-[#083F46]">
        <thead>
          <tr className="w-full h-[50px]">
            <th>
            </th>
            <th>
              <h1 className="font-bold">full name</h1>
            </th>
            <th>
              <h1 className="font-bold">gender</h1>
            </th>
            <th>
              <h1 className="font-bold">e-mail</h1>
            </th>
            <th>
              <h1 className="font-bold">phone number</h1>
            </th>
            <th>
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((d) => (
            <tr key={d._id} className="font-semibold">
              <td>
                <div className="w-full flex justify-center">
                <img src="/Images/1000003393.jpg" alt="user-icon" className="w-[40px] h-[40px] rounded-[50%]"/>
                </div>
              </td>
              <td>{d.userName}</td>
              <td>{d.gender}</td>
              <td>{d.email}</td>
              <td>{d.phoneNumber}</td>
              <td className="flex">
                <button
                  className="w-[50%] text-[20px] rounded-[5px] flex justify-center items-center"
                  onClick={() =>
                    onUpdateStudent(d._id, d.studentId, d.studentName, d.age)
                  }
                >
                  <MdEdit />
                </button>

                <button
                  className="w-[50%] text-[20px] rounded-[5px] flex justify-center items-center"
                  onClick={() => onDeleteContact(d._id)}
                >
                  <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
