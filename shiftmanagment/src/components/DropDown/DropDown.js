import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';


class DropDown extends Component {
    

  render() {
    return (
      <div>
         <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="http://test.com">Action</a>
    <a class="dropdown-item" href="localhost:3000">Another action</a>
    <a class="dropdown-item" href="localhost:3000">Something else here</a>
  </div>
</div>
      </div>
    );
  }
}

export default DropDown;