import React from "react";

const List = ({ contacts, toDelete }) => {
  console.log(contacts);
  return (
    <>
      {contacts && (
        <ul>
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
