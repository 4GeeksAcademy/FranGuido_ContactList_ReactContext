import React, {useState, useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { AddContact } from "./AddContact";
import { ContactList } from "./ContactList";

import "../../styles/home.css";


export const Home = () => {

	const {store, actions} = useContext(Context);
	
	const [contacts, setContacts] = useState([]);
	
	const addContactHandler = (contact) =>{
		console.log(contact) // Checking
		// Updating contacts
		setContacts([...contacts, contact])	
	};

	useEffect(() => {actions.addNewContact()}, [contacts]) // [The dependency]

	return (
	<>
	<AddContact addContactHandler={addContactHandler} />
	<ContactList contacts={contacts}/>
	</>

	)
	
	
};
