import "./App.css";
import React, { Component } from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import Filter from "./components/Filter/Filter";
import Title from "./components/Title/Title.js";
class App extends Component {
  state = {
    contacts: [],
    name: "",
    tel: "",
    filter: "",
  };
  addContact = (el) => {
    console.log(el);
    this.setState((prev) => {
      return {
        contacts: [...prev.contacts, el],
      };
    });
  };

  getValue = (el) => {
    this.setState({ [el.name]: el.value });
  };

  toGetFilteredContacts = () => {
    const filteredContacts = this.state.contacts.filter((el) => {
      return el.name.toLowerCase().includes(this.state.filter);
    });

    return filteredContacts;
  };

  getList = () => {
    const filteredContacts = this.toGetFilteredContacts();
    if (this.state.filter) return filteredContacts;
    return this.state.contacts;
  };

  toDelete = (id) => {
    this.setState((prev) => {
      const contacts = prev.contacts.filter((el) => !(el.id === id));
      return { contacts };
    });
  };

  render() {
    console.log("filteredContacts", this.getList());
    console.log("all contacts", this.state.contacts);
    return (
      <div className="App">
        <Title title="Feedback" />
        <Form addContact={this.addContact} getValue={this.getValue} />
        <Title />
        <Title title="Contacts" />
        <Filter filterContact={this.getValue} />
        <List contacts={this.getList()} toDelete={this.toDelete} />
      </div>
    );
  }
}
export default App;
