import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";

class Filter extends Component {
  state = {
    filter: "",
  };

  handleChange = (e) => {
    const { filterContact } = this.props;
    this.setState({ [e.target.name]: e.target.value });
    filterContact(e.target);
  };

  render() {
    const { handleChange } = this;

    return (
      <input
        className={s.filter}
        onInput={handleChange}
        type="text"
        name="filter"
        placeholder="Enter the name"
      />
    );
  }
}

export default Filter;

Filter.propTypes = {
  filterContact: PropTypes.func.isRequired,
};
