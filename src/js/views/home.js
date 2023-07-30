import React from "react";
import { AddContact } from "./AddContact";
import { ContactList } from "./ContactList";

import "../../styles/home.css";

const contacts = [
	{
	  id: 1,
	  "name": "Ana",
	  "email": "ana@email.com",
	  "phone": "1234",
	  "address": "City, Country",
	},
	{
	  id: 2,
	  "name": "Luis",
	  "email": "luis@email.com",
	  "phone": "5678",
	  "address": "City, Country",
	}
  ];


export const Home = () => (

	 


	<>
	
	<AddContact/>
	<ContactList contacts={contacts}/>
	
	
	</>
	
);
