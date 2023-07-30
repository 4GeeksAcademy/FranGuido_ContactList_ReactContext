import React from 'react';
import { ContactCard } from '../component/ContactCard';
import "../../styles/home.css";


export const ContactList = (props) => {
  console.log(props) // Checking

  const deleteContactHandler = (id) =>{
    props.getContactID(id)
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      
      <ContactCard contact={contact} clickHander ={deleteContactHandler}></ContactCard>
      
    )
  })

  return (
    <>

      <div className='container mt-3'>
      <h3>Contact List</h3>
      <div className="row">
      <button type="button" class="newContactButton btn">Add a new contact</button>

      </div>
      {renderContactList}
        
      </div>
      
    </>
  )
}

