// import ContactList from "components/ContactList";
import ContactForm from "components/ContactsForm/ContactsForm";
import Filter from "components/Filter";


// import { useState } from 'react';
// import { nanoid } from 'nanoid'
// import s from './ContactForm.module.css'

export default function Contacts() {

  return (
    <section>
      <h1>Welcom to phonebook👻</h1>
      <ContactForm />
      {/* <ContactList /> */}
      <Filter/>
    </section>
  )
};
