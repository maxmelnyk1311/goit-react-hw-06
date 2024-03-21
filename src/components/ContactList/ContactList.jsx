import { useSelector } from "react-redux";

import { selectContacts } from "../../redux/contactsSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice.js";

import Contact from "./Contact/Contact.jsx";
import css from "./ContactList.module.css";

export default function ContactList() {
    const contacts = useSelector(selectContacts);
    const filterValue = useSelector(selectNameFilter);

    const contactsToRender = contacts.filter((contact) => contact.name.includes(filterValue.trim()));

    return (
        <ul className={css.contactList}>
            {contactsToRender.map((contact) => {
                return (
                    <Contact 
                        key={contact.id} 
                        contact={contact}
                    />            
                )
            })}
        </ul>
    )
}