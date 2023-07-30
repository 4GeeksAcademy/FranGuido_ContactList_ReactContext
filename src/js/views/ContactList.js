import React from 'react';
import "../../styles/home.css";


const cardSytle = {
 width: "540px",
  
};

export const ContactList = (props) => {
  console.log(props)

  const renderContactList = props.contacts.map((contact) => {
    return (
      
      <div className="card mb-3" style={cardSytle}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="img-fluid rounded-start" alt="..."></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{contact.name}</h5>
              <p className="card-text">{contact.email}</p>
              <p className="card-text">{contact.phone}</p>
              <p className="card-text">{contact.address}</p>
            </div>
            <div>
              <i className="fas fa-trash-alt"></i>
              <i className="fas fa-pencil-alt"></i>
            </div>
          </div>
        </div>
      </div>
      
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

