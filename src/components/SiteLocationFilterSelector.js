import React from "react";
import { Dropdown } from "react-bootstrap";
import { VisibilityFilters } from "../const";
import DropdownFilter from "./DropdownFilter";

const SiteLocationFilterSelector = ({ types, selected, onClick }) => (
  types ? <Dropdown className="mt-2">
    <Dropdown.Toggle variant="success" id="dropdown-basic">
      {types[selected].DATA}
    </Dropdown.Toggle>
    <Dropdown.Menu>
      {Object.keys(types).map(i => (
        <DropdownSelector key={types[i].ID} filter={types[i].DATA} onClick={onClick.bind(this, types[i].ID)}/>
      ))}
    </Dropdown.Menu>
  </Dropdown>
  : <div>loading...</div>
);

export default SiteLocationFilterSelector;
