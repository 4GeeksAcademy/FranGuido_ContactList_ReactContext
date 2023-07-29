import React, { useContext, useEffect, useState } from 'react';
import { Context } from 'react';
import "../../styles/home.css";

export const AddContact = () => {
    return (
        <>

        <div className='container'>
            <form>

                <div className='mb-3'>
                    <h2 className='formHeader'>Add a new contact</h2>
                </div>

                <div className="mb-3">
                    <label for = "inputName" className="form-label">Full name</label>
                    <input type="text" class="form-control" id="inputName" aria-describedby="nameHelp" placeholder='Jane Doe'></input>
                </div>

                <div className="mb-3">
                    <label for="inputEmail" className="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder='user@email.com'></input>   
                </div>

                <div className="mb-3">
                    <label for="inputPhone" className="form-label">Phone number</label>
                    <input type="email" class="form-control" id="inputPhone" aria-describedby="phoneHelp" placeholder='5555-5555'></input>   
                </div>

                <div className="mb-3">
                    <label for="inputAddress" className="form-label">Address</label>
                    <input type="text" class="form-control" id="inputAddress" aria-describedby="addressHelp" placeholder='Street, City, Country.'></input>   
                </div>
                
                <button type="submit" class="formCancelButton btn">Cancel</button>
                <button type="submit" class="formAddButton btn">Save contact</button>
            </form>

            </div>


        </>
    )
}

