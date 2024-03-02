import React from "react";
import avatar from "../assets/icons/user.svg";
import trash from "../assets/icons/delete.svg";
import email from "../assets/icons/email.svg";
import phone from "../assets/icons/phone.svg";

function ContactItem({ contact,deleteHandler }) {
  return (
    <li key={contact.id}>
      <div>
        <img src={avatar} alt='' />
        <p>
          {contact.name} {contact.lastName}
        </p>
      </div>
      <div>
        <img src={email} alt='Email' />
        <p> {contact.email}</p>
      </div>
      <div>
        <img src={phone} alt='Phone' />
        <p> {contact.phone}</p>
      </div>
      <div>
        <img src={trash} alt='delete' onClick={()=>deleteHandler(contact.id)} />
      </div>
    </li>
  );
}

export default ContactItem;
