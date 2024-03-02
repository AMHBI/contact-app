import ContactItem from "./ContactItem";

function ContactsList({ contacts, deleteHandler }) {
  return (
    <div className='contacts_list'>
      <h2 >Contacts</h2>
      <ul>
        {contacts.map((contact) => (
          <ContactItem
            contact={contact}
            key={contact.id}
            deleteHandler={deleteHandler} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ContactsList;
