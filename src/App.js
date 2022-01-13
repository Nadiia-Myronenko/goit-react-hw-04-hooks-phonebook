import { Component } from "react";

import Wrapper from "./components/Wrapper/Wrapper.styled";
import MainHeader from "./components/MainHeder/MainHeader.styled";
import ContactsList from "./components/ContactsList/ContactsList";
import Form from "./components/Form/Form";
import shortid from "shortid";
import SearchField from "./components/SearchField/SearchField";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };
  formSubmitHandler = (data) => {
    const contactId = shortid.generate();
    let includesName = false;
    for (const contact of this.state.contacts) {
      if (data.name === contact.name) {
        includesName = true;
      }
    }
    if (!includesName) {
      this.setState({
        contacts: this.state.contacts.concat({
          id: contactId,
          name: data.name,
          number: data.number,
        }),
      });
    } else {
      alert(`${data.name} is already in contacts!!!`);
    }
  };
  onContactSearch = (event) => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };
  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      //use this condition check because we every time create a new array
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <Wrapper>
        <MainHeader />
        <Form onSubmitProp={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <SearchField value={filter} onChange={this.onContactSearch} />
        <ContactsList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Wrapper>
    );
  }
}

export default App;
