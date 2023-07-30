import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import "../../styles/home.css";


export const AddContact = () => {

    const { store, actions } = useContext(Context)

    

    


    return (
        <>

        <div className='container mt-5'>
            <form>

                <div className='mb-3'>
                    <h2 className='formHeader'>Add a new contact</h2>
                </div>

                <div className="mb-3">
                    <label for = "inputName" className="form-label">Full name</label>
                    <input name="name" type="text" class="form-control" id="inputName"  placeholder='Jane Doe'></input>
                </div>

                <div className="mb-3">
                    <label for="inputEmail" className="form-label">Email</label>
                    <input name="email" type="email" class="form-control" id="inputEmail" placeholder='user@email.com'></input>   
                </div>

                <div className="mb-3">
                    <label for="inputPhone" className="form-label">Phone number</label>
                    <input name="phone" type="text" class="form-control" id="inputPhone"  placeholder='5555-5555'></input>   
                </div>

                <div className="mb-3">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input name="address" type="text" class="form-control" id="inputAddress" aria-describedby="addressHelp" placeholder='Street, City, Country.'></input>   
                </div>
                
                
                <button type="submit" class="formCancelButton btn">Cancel</button>

                <button type="submit" class="formAddButton btn" onClick={() => actions.addNewContact(newContact)}>Save contact</button>
            </form>

            </div>


        </>
    )
}

