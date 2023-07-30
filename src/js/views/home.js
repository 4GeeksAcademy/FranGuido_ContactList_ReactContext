import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { v4 as uuidv4 } from "uuid"; //Give ID to each data entry
import { AddContact } from "./AddContact";
import { ContactList } from "./ContactList";

import "../../styles/home.css";


export const Home = () => {

	const {store, actions} = useContext(Context);
	
	const [contacts, setContacts] = useState([]);
	

	// Adding new contacts to the list
	const addContactHandler = (contact) =>{
		console.log(contact) // Checking
		// Updating contacts
		setContacts([...contacts, {id: uuidv4(), ...contact}])	
	};

	useEffect(() => {actions.addNewContact()}, [contacts]) 

	//Deleting contacts
	const removeContactHandler = (id) =>{

		const newContactList = contacts.filter((contact) => {
			return contact.id !== id;
		});

		setContacts(newContactList);
	};



	return (
	<>
	
	<ContactList contacts={contacts} getContactID = {removeContactHandler}/>
	<AddContact addContactHandler={addContactHandler} />
	</>

	)
	
	
};
