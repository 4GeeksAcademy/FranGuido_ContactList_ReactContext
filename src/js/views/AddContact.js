import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import "../../styles/home.css";


export class AddContact extends React.Component{

    // States that will be updated
    state = {
        name: "",
        email: "",
        phone: "",
        address: "",
    }

    // Add contact info

    add = (e) =>{
        e.preventDefault(); // Prevents page reloading after submit
        if (this.state.name === "" && this.state.email === ""){
            alert("You must provide at least a Name and an Email.");
            return;
        }
        this.props.addContactHandler(this.state);
        // Clear form fields after submitting
        this.setState({name: "", email:"", phone:"", address: ""});
        console.log(this.state)

    }

    

    render() {
        return(
            <>
            <div className='container mt-5'>
           
            <form onSubmit={this.add}>

                <div className='mb-3'>
                    <h2 className='formHeader'>Add a new contact</h2>
                </div>

                <div className="mb-3">
                    <label className="form-label">Full name</label>
                    <input name="name" type="text" class="form-control" placeholder='Jane Doe' value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} ></input>
                </div>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input name="email" type="email" class="form-control" placeholder='user@email.com' value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}></input>   
                </div>

                <div className="mb-3">
                    <label className="form-label">Phone number</label>
                    <input name="phone" type="text" class="form-control" placeholder='5555-5555' value={this.state.phone} onChange={(e) => this.setState({phone: e.target.value})}></input>   
                </div>

                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input name="address" type="text" class="form-control" placeholder='Street, City, Country.' value={this.state.address} onChange={(e) => this.setState({address: e.target.value})}></input>   
                </div>
                
                
                <button type="submit" class="formCancelButton btn">Cancel</button>

                <button type="submit" class="formAddButton btn" onClick={() => actions.addNewContact(newContact)}>Save contact</button>
            </form>

            </div>


        </>


        )
    }

}

