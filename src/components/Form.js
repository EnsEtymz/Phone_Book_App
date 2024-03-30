import React from 'react';
import './still.css'
import { useState } from 'react';


function Form(props) {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [contacts, setContacts] = useState([
       
        {
            fullName:"Vitalik Buterin",
            phoneNumber:"+905444568789"
        },
        {
            fullName:"Warren Buffet",
            phoneNumber:"+905537568421"
        },
        {
            fullName:"Enes Etyimez",
            phoneNumber:"+905340614884"
        }
    ]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isShow,setIsShow]= useState(props.isShow);

    const handleSubmit = (event) => {
      event.preventDefault();
      if (fullName || phoneNumber !== ""){
        const newContact = { fullName: fullName, phoneNumber: phoneNumber };
        setContacts([...contacts, newContact]);
        setFullName('');
        setPhoneNumber('');
        setIsShow(true);
        document.getElementById("full_name").style.backgroundColor="white";
        document.getElementById("phone_number").style.backgroundColor="white";
        document.getElementById("full_name").style.color="black";
     document.getElementById("phone_number").style.color="black";
      }
      else{
      setIsShow(false);
      console.log(isShow);
      document.getElementById("full_name").style.backgroundColor="red";
     document.getElementById("phone_number").style.backgroundColor="red";
     document.getElementById("full_name").style.color="white";
     document.getElementById("phone_number").style.color="white";
      }
    
    };
  
    const handleDelete = (index) => {
      setContacts(contacts.filter((_, i) => i !== index));
    };
  
    const filteredContacts = contacts.filter(contact =>
      contact.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phoneNumber.includes(searchTerm)
    );
  
    return (
      <div className='cerceve' >
        <div className='baslik'>Phone Book</div>
        <div className='mevcut'>Total: {filteredContacts.length}</div>
        <input type='search' className='searchbar' placeholder='Search' value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)}></input>
        <hr></hr>
        <div className='contact-list'>
          {filteredContacts.map((contact, index) => (
            <div key={index} className='contact'>
            <span className='span1'>{contact.fullName+"       "}</span>
            <button className='sil' onClick={() => handleDelete(index)}>X</button>
            <span className='span2' >{contact.phoneNumber}</span>
             
            </div>
          ))}
        </div>
        <hr></hr>
        <form className='form' onSubmit={handleSubmit}>
          <input
          id='full_name'
            type='text'
            placeholder='FullName'
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
          <input
          id='phone_number'
            type='text'
            placeholder='Phone Number'
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
          <button type='submit' className='buton'>Save</button>
        </form>
      </div>
    )
  };
  
  export default Form;
