import React, { Component } from "react";
import PropTypes from "prop-types";

import { v4 as id } from "uuid";
import s from "./Form.module.css";

class Form extends Component {
  state = {
    name: "",
    tel: "",
  };

  handleChange = (e) => {
    const { getValue } = this.props;

    getValue(e.target);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addContact } = this.props;
    const { name, tel } = this.state;
    const el = { name, tel, id: id() };
    addContact(el);
    this.setState({ name: "", tel: "" });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { name, tel } = this.state;
    return (
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          placeholder="name"
          value={name}
          required
        />
        <input
          onChange={this.handleChange}
          type="number"
          name="tel"
          id="tel"
          placeholder="tel"
          value={tel}
          required
        />
        <button type="submit">add</button>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  getValue: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
};
