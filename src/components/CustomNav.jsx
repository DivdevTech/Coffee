// YourComponent.jsx

import React, { useState } from "react";
import Select from "react-select";
import Modal from "react-modal";
// import './YourComponent.css';

const YourComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    // Add more options as needed
  ];

  const menuItems = [
    { label: "STOCKS", submenus: ["manage Grn", "manage"] },
    { label: "SALES", submenus: ["Auction", "Direct"] },
    { label: "ACCOUNTS", submenus: ["Submenu 3.1", "Submenu 3.2"] },
    { label: "SETTINGS", submenus: ["Submenu 3.1", "Submenu 3.2"] },
    { label: "ACCOUNTS", submenus: ["Submenu 3.1", "Submenu 3.2"] },
    { label: "ADMINISTRATOR", submenus: ["Submenu 3.1", "Submenu 3.2"] },
    { label: "HELP", submenus: ["Submenu 3.1", "Submenu 3.2"] },
  ];

  const handleMenuClick = (menuLabel) => {
    if (selectedMenu === menuLabel) {
      setSelectedMenu(null);
    } else {
      setSelectedMenu(menuLabel);
    }
  };

  return (
    <div className="main-container">
      <div className="red-colored-div">
        <div className="nav2">
          {menuItems.map((menuItem, index) => (
            <div key={index}>
              <p onClick={() => handleMenuClick(menuItem.label)}>
                {menuItem.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Submenus outside the red div */}
      {selectedMenu && (
        <ul className="submenu">
          {menuItems
            .find((menuItem) => menuItem.label === selectedMenu)
            .submenus.map((submenu, subIndex) => (
              <li key={subIndex} onClick={openModal}>
                {submenu}
              </li>
            ))}
        </ul>
      )}

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {/* Form or other content for the modal */}
        <form>
          <label>
            Name:
            <input type="text" />
          </label>
          <br />
          <label>
            Email:
            <input type="text" />
          </label>
          <br />
          <button onClick={closeModal}>Submit</button>
        </form>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default YourComponent;
