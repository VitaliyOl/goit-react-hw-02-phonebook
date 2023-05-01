import React from 'react';

export default function Filter({ filter, handleChange }) {
  return (
    <input
      name="filter"
      type="text"
      value={filter}
      onChange={handleChange}
    ></input>
  );
}
