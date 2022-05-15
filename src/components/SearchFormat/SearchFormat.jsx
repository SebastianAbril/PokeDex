import React from 'react';
import './SearchFormat.css';

function SearchFormat() {
  return (
    <form className="SearchFormat">
      <select className="SearchFormatType SearchFormatButton" name="Type">
        <option disabled hidden selected>
          Type
        </option>
        <option value="Fire">Fire</option>
        <option value="Normal">Normal</option>
        <option value="Electric">Electric</option>
        <option value="Water">Water</option>
      </select>

      <select className="SearchFormatAttack SearchFormatButton" name="Attack">
        <option disabled hidden selected>
          Attack
        </option>
        <option value="Fire">1000</option>
        <option value="Normal">1500</option>
        <option value="Electric">2000</option>
        <option value="Water">2500</option>
      </select>

      <select className="SearchFormatExperience SearchFormatButton" name="Experience">
        <option disabled hidden selected>
          Experiencie
        </option>
        <option value="Fire">1000</option>
        <option value="Normal">2000</option>
        <option value="Electric">3000</option>
        <option value="Water">4000</option>
      </select>
    </form>
  );
}

export { SearchFormat };
