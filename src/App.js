import "./App.css";
import React, { Component } from "react";

import Form from "./components/Form/Form";
import List from "./components/List/List";
import Filter from "./components/Filter/Filter";
import Title from "./components/Title/Title.js";

class App extends Component {
  state = {
    contacts: [{ name: "Sandra", tel: "000 000 00 00", id: "1" }],
    name: "",
    tel: "",
    filter: "",
  };
  addContact = (el) => {
    const { contacts } = this.state;
    const twin = contacts.some((c) => c.name === el.name);
    twin
      ? alert(`Alarma`)
      : this.setState((prev) => {
          return {
            contacts: [...prev.contacts, el],
          };
        });
  };

  getValue = (el) => {
    this.setState({ [el.name]: el.value });
  };

  toGetFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter((el) => {
      return el.name.toLowerCase().includes(filter);
    });

    return filteredContacts;
  };

  getList = () => {
    const { contacts, filter } = this.state;
    const filteredContacts = this.toGetFilteredContacts();
    if (filter) return filteredContacts;
    return contacts;
  };

  toDelete = (id) => {
    this.setState((prev) => {
      const contacts = prev.contacts.filter((el) => !(el.id === id));
      return { contacts };
    });
  };

  render() {
    const { addContact, getValue, getList, toDelete } = this;
    return (
      <div className="App">
        <Title title="PhoneBook" />
        <Form addContact={addContact} getValue={getValue} />
        <Title title="Contacts" />
        <Filter filterContact={getValue} />
        <List contacts={getList()} toDelete={toDelete} />
      </div>
    );
  }
}
export default App;
