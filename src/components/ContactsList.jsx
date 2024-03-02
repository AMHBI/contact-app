import avatar from "../assets/icons/user.svg";
import trash from "../assets/icons/delete.svg";
import email from "../assets/icons/email.svg";
import phone from "../assets/icons/phone.svg";

function ContactsList({ contacts }) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <h2>Contacts</h2>
      <ul className="contacts_list">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <div>
              <img src={avatar} alt='' />
              <p>
                Name: {contact.name} {contact.lastName}
              </p>
            </div>
            <div>
              <img src={email} alt='Email' />
              <p>E-mail: {contact.email}</p>
            </div>
            <div>
            <img src={phone} alt="Phone" />
            <p>Phone Number: {contact.phone}</p>
            </div>
            <div>
              <img src={trash} alt="delete" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactsList;
