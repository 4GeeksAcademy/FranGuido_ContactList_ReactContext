import React from 'react';
import { ContactCard } from '../component/ContactCard';
import "../../styles/home.css";


const cardSytle = {
 width: "540px",
  
};

export const ContactList = (props) => {
  console.log(props)

  const renderContactList = props.contacts.map((contact) => {
    return (
      
      <ContactCard contact={contact}></ContactCard>
      
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

