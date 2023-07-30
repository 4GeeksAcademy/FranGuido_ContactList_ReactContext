const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			sampleContacts: [
				{
					name: "Ana Figueroa",
					email: "ana@email.com",
					phone: "5555-5555",
					address: "Nosara, Guanacaste",
				}

			],

			newContacts: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			addNewContact: (newItem) =>{
				const store = getStore();
				setStore({newContacts: [newItem, ...store.newContacts]})
				localStorage.setItem("contacts", JSON.stringify(store.newContacts))
			}
		}
	};
};

export default getState;
