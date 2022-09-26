import React from "react";
import Contacts from "./contacts.jsx";
import { contact_details } from "../contact_details";

function App(){
    return (
        <div>
            <h1 className="my-contacts-h1">My contacts</h1>
            <section id="first-section">
            <Contacts 
             name1={contact_details.name1} 
             ph_no1={contact_details.ph_no1} 
             email1={contact_details.e_mail1}
             img1 = {contact_details.img1}
             />

             <Contacts 
             name1={contact_details.name2} 
             ph_no1={contact_details.ph_no2} 
             email1={contact_details.e_mail2}
             img1 = {contact_details.img2}
             />

             <Contacts 
             name1={contact_details.name3} 
             ph_no1={contact_details.ph_no3} 
             email1={contact_details.e_mail3}
             img1 = {contact_details.img3}
             />
            </section>
        </div>
    )
};

export default App;