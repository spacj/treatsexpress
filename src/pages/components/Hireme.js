import React from 'react';
import ReactDOM from 'react-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Hireme() {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 bg-[#fff0]">
          <DropdownButton
              as={ButtonGroup}
              id={`dropdown-button-drop-${'up'}`}
              variant="#f57af1e6"
              title={<span><FontAwesomeIcon icon={faPhone} flip="horizontal" style={{color: "#ffffff",}} className="fa-xl" /></span>}
              className="colorbtn"
            >
              <Dropdown.Item eventKey="1" className="custom-dropdown-item mb-1 bg-[#fff0]"><span><FontAwesomeIcon icon={faPhone} flip="horizontal" style={{color: "#ffffff",}} className="fa-xl bg-[#f57af19a]" /></span></Dropdown.Item>
              <Dropdown.Item eventKey="2" className="custom-dropdown-item mb-1"><span className="bg-[#f57af19a]"><FontAwesomeIcon icon={faPhone} flip="horizontal" style={{color: "#ffffff",}} className="fa-xl" /></span></Dropdown.Item>
              <Dropdown.Item eventKey="3" className="custom-dropdown-item mb-2"><span className="bg-[#f57af19a]"><FontAwesomeIcon icon={faPhone} flip="horizontal" style={{color: "#ffffff",}} className="fa-xl" /></span></Dropdown.Item>
            </DropdownButton>
      </div>
    </>
  );
}

export default Hireme;
