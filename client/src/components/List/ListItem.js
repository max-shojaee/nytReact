import React from "react";
import './List.css';

const ListItem = props =>
  <li className="list-group-item">
    {props.children}
  </li>;


export default ListItem;