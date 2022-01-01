import {useState,useEffect} from 'react';

import './styles.css';

import List from './List';
import Form from './Form';

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname:"Hüseyin",
            phone_number: "12123123"
        },
        {
            fullname:"Hasan",
            phone_number: "21432523"
        }
        ,
        {
            fullname:"Ahmet",
            phone_number: "789897989"
        }
    ])

    useEffect(()=>{
        console.log(contacts)
    },[contacts])

    
    return (
        <div id='container'>
            <h1>Numbers</h1>
            <List contacts={contacts}/>
            <Form addContact={setContacts} contacts={contacts}/>
            
        </div>
    )
}

export default Contacts
