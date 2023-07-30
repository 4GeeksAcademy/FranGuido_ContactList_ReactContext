import React from 'react';
import { Link } from 'react-router-dom';
import "../../styles/home.css";



// show only one contact card
export const ContactCard = (props) => {

  const {id, name, email, phone, address} = props.contact;

  return (

    <>

    <div className="card mb-3 mt-4">
        <div className="row g-0">
          <div className="imageDiv col-md-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" className="img-fluid rounded-circle" alt="..."></img>
          </div>
          <div className="cardContent col-md">
            <div className="card-body">
              <h6 className="card-title"><b>{name}</b></h6>
              <p className="card-text"> <b>Email: </b> {email}</p>
              <p className="card-text"> <b>Phone number: </b> {phone}</p>
              <p className="card-text"> <b>Address: </b> {address}</p>
            </div>
          </div>
          <div className="buttonsSection col-md-1"> 
              <Link to={{pathname:`/edit`, state: {contact: props.contact} }}>
              <i className="fas fa-pencil-alt"></i>
              </Link>
              <i className="fas fa-trash-alt ms-3" onClick={() => props.clickHander(id)}></i>
            </div>
        </div>
      </div>
      </>
  )
}

