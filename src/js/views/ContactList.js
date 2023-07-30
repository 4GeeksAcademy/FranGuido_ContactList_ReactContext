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

      <div className='container mt-5 mb-5'>
      <h3 className='contactTitle mt-3'>Contact List</h3>
      <div className="row mt-5">
      <button type="button" class="newContactButton btn">Add a new contact</button>

      </div>
      {renderContactList}
        
      </div>
      
    </>
  )
}

