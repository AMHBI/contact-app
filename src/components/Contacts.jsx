import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 } from "uuid";
import ContactsList from "./ContactsList.jsx";

import inputs from "../utils/inputs.js";
import showToast from "../utils/showToast.js";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value, id: v4() }));
  };

  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      showToast("All fields must be filled", "error");
      return;
    }

    setContacts((contacts) => [...contacts, contact]);
    setContact({
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
    showToast("Contact added successfully!", "success");
    console.log(contacts);
  };
  return (
    <div className='flex flex-col justify-center items-center mt-16'>
      <div
        className='*:w-full md:*:w-[45%] *:m-3 *:h-12 *:p-2 *:pl-5 *:hover:outline-none *:active:outline-none
       *:bg-accent *:rounded-lg *:text-primary *:placeholder:text-primary 
      flex flex-wrap items-center justify-evenly '>
        {inputs.map((input, index) => (
          <input
            key={index}
            name={input.name}
            type={input.type}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}
      </div>
      <ToastContainer />
      <button
        className='w-[30dvw] bg-primary text-white m-10 h-16 rounded-lg'
        onClick={addHandler}>
        Add Contact
      </button>
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default Contacts;
