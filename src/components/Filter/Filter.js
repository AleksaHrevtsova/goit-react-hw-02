import React, { Component } from "react";

class Filter extends Component {
  state = {
    filter: "",
  };
  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //   };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.filterContact(e.target);
  };

  render() {
    return (
      //   <form onSubmit={this.handleSubmit}>
      <input
        onInput={this.handleChange}
        type="text"
        name="filter"
        placeholder="Enter the name"
      />
      //   </form>
    );
  }
}

export default Filter;
