import React from 'react';

const cardSytle = {
  width: "540px",
   
 };

// show only one contact card
export const ContactCard = (props) => {

  const {id, name, email, phone, address} = props.contact;

  return (

    <>

    <div className="card mb-3" style={cardSytle}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="img-fluid rounded-circle" alt="..."></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{email}</p>
              <p className="card-text">{phone}</p>
              <p className="card-text">{address}</p>
            </div>
            <div>
              <i className="fas fa-trash-alt" onClick={() => props.clickHander(id)}></i> 
              <i className="fas fa-pencil-alt"></i>
            </div>
          </div>
        </div>
      </div>
      </>
  )
}

