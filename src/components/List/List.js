import React from "react";
import s from "./List.module.css";
import PropTypes from "prop-types";

const List = ({ contacts, toDelete }) => {
  return (
    <>
      {contacts && (
        <ul className={s.list}>
          {contacts.map((el) => (
            <li key={el.id} onClick={() => toDelete(el.id)}>
              {el.name} <span>{el.tel}</span>
              <button>del</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default List;

List.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      tel: PropTypes.string.isRequired,
    })
  ),
  toDelete: PropTypes.func.isRequired,
};
