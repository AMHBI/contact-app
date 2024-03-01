import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ContactsList from "./ContactsList.jsx";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const showToast = (alert, type) => {
    if (type === "error") {
      toast.error(alert, {
        position: "top-center",
        theme: "colored",
      });
    }else if(type==="success"){
        toast.success(alert, {
            position: "top-center",
            theme: "colored",
          });
    }
  };
  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };
  const addHandler = () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      showToast("All fields must be filled","error");
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
    <div>
      <div className="*:w-full md:*:w-[45%] *:m-3 *:h-12 *:p-2 *:pl-5 *:hover:outline-none *:active:outline-none
       *:bg-accent *:rounded-lg *:text-primary *:placeholder:text-primary 
      flex flex-wrap items-center justify-evenly ">
        <input
          name='name'
          type='text'
          placeholder='Name'
          value={contact.name}
          onChange={changeHandler}
        />
        <input
          name='lastName'
          type='text'
          placeholder='Last Name'
          value={contact.lastName}
          onChange={changeHandler}
        />
        <input
          name='email'
          type='email'
          placeholder='E-mail'
          value={contact.email}
          onChange={changeHandler}
        />
        <input
          name='phone'
          type='number'
          inputMode='numeric'
          placeholder='Phone'
          value={contact.number}
          onChange={changeHandler}
        />
      </div>
        <ToastContainer />
        <button onClick={addHandler}>Add Contact</button>
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default Contacts;
