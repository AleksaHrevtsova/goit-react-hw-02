import React, { Component } from "react";
import { v4 as id } from "uuid";
class Form extends Component {
  state = {
    name: "",
    tel: "",
  };

  handleChange = (e) => {
    this.props.getValue(e.target);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const { name, tel } = this.state;

    const el = { name, tel, id: id() };
    console.log(el);
    this.props.addContact(el);
    this.setState({ name: "", tel: "" });
  };

  render() {
    return (
      <form action="submit" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          id="name"
          placeholder="name"
          value={this.state.name}
          required
        />
        <input
          onChange={this.handleChange}
          type="number"
          name="tel"
          id="tel"
          placeholder="tel"
          value={this.state.tel}
          required
        />
        <button type="submit">add</button>
      </form>
    );
  }
}

export default Form;
