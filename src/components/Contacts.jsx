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
  const addHandler = async () => {
    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      showToast("All fields must be filled");
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
      <div>
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
          placeholder='Phone'
          value={contact.number}
          onChange={changeHandler}
        />
        <button onClick={addHandler}>Add Contact</button>
        <ToastContainer />
      </div>
      <ContactsList contacts={contacts} />
    </div>
  );
}

export default Contacts;
