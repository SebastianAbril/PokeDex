import React from 'react';
import './SearchFormat.css';

function SearchFormat() {
  return (
    <form className="SearchFormat">
      <select className="SearchFormatType" name="Type">
        <option disabled hidden selected>
          Type
        </option>
        <option value="Fire">Fire</option>
        <option value="Normal">Normal</option>
        <option value="Electric">Electric</option>
        <option value="Water">Water</option>
      </select>
      <label>Attack</label>
      <div>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
        <input type="checkbox"></input>
      </div>

      <label htmlFor="experience">
        <input htmlFor="experience" type="text" />
      </label>
    </form>
  );
}

export { SearchFormat };
