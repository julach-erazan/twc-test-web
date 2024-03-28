import axios from "axios";
import React, { useContext } from "react";
import { useState } from "react";
import { RiLogoutCircleLine } from "react-icons/ri";
import User from "../user/User";
import SuccessAlert from "../../components/SuccessAlert";
import WarnningAlert from "../../components/WarnningAlert";

const Contacts = () => {
  const [deleteContactId, setDeleteContactId] = useState(); //Id of Delete Contact
  const [callGetData, setCallGetData] = useState(() => {}); //Store getData function globle

  const [viewAlert, setViewAlert] = useState(false); //View Alert
  const [viewWarnnning, setViewWarnning] = useState(false); //View Warnning

  const [message, setMessage] = useState();//Store backend Responce message
  const [contactName, setContactName] = useState();//Store delete user name

  //Delete Contacts
  const handleDeleteContact = async (id) => {

    try {
      const response = await axios //Send data to Backend
        .post("http://localhost:8001/deletecontact", {
          id,
        });

      if (response.status === 201) {
        setMessage(response.data.message);
        setViewAlert(true);
        callGetData();
      }
    } catch (error) {
      setMessage(error.message);
      setViewAlert(true);
    }
  };

  //Get data from User component
  const deleteContact = (id, userName, getData) => {
    setDeleteContactId(id);
    setContactName(userName);
    setViewWarnning(true);
    setCallGetData(() => getData)
  };

  //If user select Yes button, send Get userId and it send to Delete api calling function
  const handleUserId = (id) => {
    handleDeleteContact(id); //Delete api function
    setViewWarnning(false); //Close Warnning alert
  };

  //Update Contacts
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
        setMessage(response.data.message);
        setViewAlert(true);
        getData();
      }
    } catch (error) {
      setMessage(error.data.message);
      setViewAlert(true);
    }
  };

  //Close Alert
  const closeAlert = () => {
    setViewAlert(false);
    setViewWarnning(false);
  };

  return (
    <div
      className="
        w-full h-full bg-[url('/src/Images/bg.jpg')] bg-contain text-[#fff]

        after:content-['']
        after:w-screen after:h-screen after:bg-[#ffffffbe]
        after:absolute
        after:z-10
        after:top-0
    "
    >
      {viewAlert ? (
        <SuccessAlert message={message} onCloseAlert={closeAlert} />
      ) : (
        ""
      )}

      {viewWarnnning ? (
        <WarnningAlert
        deleteContactId={deleteContactId}
          contactName={contactName}
          onYes={handleUserId}
          onCloseAlert={closeAlert}
        />
      ) : (
        ""
      )}
      <div
        className="
        w-[1763px] h-[1000px] bg-[#083F46] rounded-[50%] rotate-[25deg] fixed z-20 top-[-180px] left-[-200px]
        flex justify-center items-center
      "
      >
        <div className="w-[50%] h-[50%] rotate-[-25deg]">
          <div className="w-[150px] flex flex-col justify-center items-left">
            <img src="/Images/logo.png" alt="Logo" className="w-[100px]" />
            <h1 className="text-[30px]">
              <span className="font-bold">contacts</span> portal
            </h1>
          </div>
          <div className="w-full h-[70%] flex flex-col justify-center items-left">
            <div className="w-full h-[20%] flex justify-between items-center">
              <h1 className="text-[50px] font-bold">Contacts</h1>
              <a
                href="/contacts/new"
                className="
               w-[150px] h-[40px] font-semibold rounded-[20px] border-[2px] border-[#fff] hover:text-[#083F46] hover:bg-[#fff]
              flex justify-center items-center
            "
              >
                <h1>add new contact</h1>
              </a>
            </div>
            <div className="w-full h-[80%] bg-[#fff] rounded-[20px]  mt-[20px]">
              <User
                onUpdateContact={handleUpdateContact}
                onDeleteContact={deleteContact}
              />
            </div>
          </div>
          <div className="w-full h-[10%] flex justify-end items-center">
            <button>
              <a
                href="/login"
                className="w-[100px] flex justify-between items-center"
              >
                <RiLogoutCircleLine className="text-[30px] font-semibold" />
                <u>
                  <h1 className="text-[20px] font-semibold">logout</h1>
                </u>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
