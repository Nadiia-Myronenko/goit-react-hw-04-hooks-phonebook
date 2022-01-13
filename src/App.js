import { useState, useEffect } from "react";

import Wrapper from "./components/Wrapper/Wrapper.styled";
import MainHeader from "./components/MainHeder/MainHeader.styled";
import ContactsList from "./components/ContactsList/ContactsList";
import Form from "./components/Form/Form";
import shortid from "shortid";
import SearchField from "./components/SearchField/SearchField";

const App = () => {
  const [contacts, setContacts] = useState(
    () => {
      return JSON.parse(localStorage.getItem("contacts"));
    }
    /*[
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]*/
  );

  const [filter, setFilter] = useState("");

  const deleteContact = (contactId) => {
    setContacts((state) => state.filter((contact) => contact.id !== contactId));
  };
  const formSubmitHandler = (data) => {
    const contactId = shortid.generate();
    let includesName = false;
    for (const contact of contacts) {
      if (data.name === contact.name) {
        includesName = true;
      }
    }
    if (!includesName) {
      setContacts((state) =>
        state.concat({
          id: contactId,
          name: data.name,
          number: data.number,
        })
      );
    } else {
      alert(`${data.name} is already in contacts!!!`);
    }
  };
  const onContactSearch = (event) => {
    setFilter(event.currentTarget.value);
  };
  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  });

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <Wrapper>
      <MainHeader />
      <Form onSubmitProp={formSubmitHandler} />
      <h2>Contacts</h2>
      <SearchField value={filter} onChange={onContactSearch} />
      <ContactsList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </Wrapper>
  );
};

export default App;
