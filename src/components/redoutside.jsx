{
  myMenus.map((menu, index) => {
    return (
      <li className="menu-items" key={index}>
        <a href={menu.label}>{menu.submenus}</a>
      </li>
    );
  });
}

import React from "react";
import myMenus from "./HomeMenus";
import "../styles/nav.css";

const CustomNav = () => {
  return (
    <nav className="desktop-nav">
      <ul className="menus">
        {myMenus.map((menu, index) => {
          return (
            <li className="menu-items" key={index}>
              <a href={menu.url}>{menu.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

// export default CustomNav;

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

// submenus
// YourComponent.jsx

// import React, { useState } from 'react';
// import Select from 'react-select';
// import Modal from 'react-modal';
// import './YourComponent.css';

// const myComponent = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedMenus, setSelectedMenus] = useState([]);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const options = [
//     { value: 'option1', label: 'Option 1' },
//     { value: 'option2', label: 'Option 2' },
//     // Add more options as needed
//   ];

//   const menuItems = [
//     {
//       label: 'STOCKS',
//       submenus: [
//         { label: 'Submenu 1.1', submenus: ['Sub-submenu 1.1.1', 'Sub-submenu 1.1.2'] },
//         { label: 'Submenu 1.2', submenus: ['Sub-submenu 1.2.1', 'Sub-submenu 1.2.2'] },
//       ],
//     },
//     {
//       label: 'SALES',
//       submenus: [
//         { label: 'Submenu 2.1', submenus: ['Sub-submenu 2.1.1', 'Sub-submenu 2.1.2'] },
//         { label: 'Submenu 2.2', submenus: ['Sub-submenu 2.2.1', 'Sub-submenu 2.2.2'] },
//       ],
//     },
//     { label: 'ACCOUNTS', submenus: ['Submenu 3.1', 'Submenu 3.2'] },
//     // Add more menu items with submenus as needed
//   ];

//   const handleMenuClick = (menuLabel) => {
//     const index = selectedMenus.indexOf(menuLabel);
//     if (index !== -1) {
//       setSelectedMenus(selectedMenus.slice(0, index));
//     } else {
//       setSelectedMenus([...selectedMenus, menuLabel]);
//     }
//   };

//   const renderSubmenus = (submenus) => (
//     <ul>
//       {submenus.map((submenu, subIndex) => (
//         <li key={subIndex} onClick={openModal}>
//           {submenu.label}
//           {submenu.submenus && renderSubmenus(submenu.submenus)}
//         </li>
//       ))}
//     </ul>
//   );

//   return (
//     <div className="main-container">
//       <div className="red-colored-div">
//         <div className="nav2">
//           {menuItems.map((menuItem, index) => (
//             <div key={index}>
//               <p onClick={() => handleMenuClick(menuItem.label)}>{menuItem.label}</p>
//               {selectedMenus.includes(menuItem.label) && renderSubmenus(menuItem.submenus)}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ... other content */}
//       <Select options={options} />
//       {/* ... other content */}

//       <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
//         {/* Form or other content for the modal */}
//         <form>
//           <label>
//             Name:
//             <input type="text" />
//           </label>
//           <br />
//           <label>
//             Email:
//             <input type="text" />
//           </label>
//           <br />
//           <button onClick={closeModal}>Submit</button>
//         </form>
//         <button onClick={closeModal}>Close Modal</button>
//       </Modal>
//     </div>
//   );
// };

// export default myComponent;

// import React, { useState } from "react";
// import Select from "react-select";
// import Modal from "react-modal";
// // import './YourComponent.css';

// const CustomNav = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [selectedMenu, setSelectedMenu] = useState(null);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const options = [
//     { value: "option1", label: "Option 1" },
//     { value: "option2", label: "Option 2" },
//     // Add more options as needed
//   ];

//   const menuItems = [
//     { label: "STOCKS", submenus: ["manage Grn", "manage warrants, Manage outturns,Manage"] },
//     { label: "SALES", submenus: ["Auction", "Direct"] },
//     { label: "ACCOUNTS", submenus: ["Submenu 3.1", "Submenu 3.2"] },
//     { label: "SETTINGS", submenus: ["Submenu 3.1", "Submenu 3.2"] },
//     { label: "ADMINISTRATOR", submenus: ["Submenu 3.1", "Submenu 3.2"] },
//     { label: "HELP", submenus: ["Submenu 3.1", "Submenu 3.2"] },
//   ];

//   const handleMenuClick = (menuLabel) => {
//     if (selectedMenu === menuLabel) {
//       setSelectedMenu(null);
//     } else {
//       setSelectedMenu(menuLabel);
//     }
//   };

//   return (
//     <div className="main-container">
//       <div className="red-colored-div">
//         <div className="nav2">
//           {menuItems.map((menuItem, index) => (
//             <div key={index}>
//               <p onClick={() => handleMenuClick(menuItem.label)}>
//                 {menuItem.label}
//               </p>
//               {selectedMenu === menuItem.label && (
//                 <ul>
//                   {menuItem.submenus.map((submenu, subIndex) => (
//                     <li key={subIndex} onClick={openModal}>
//                       {submenu}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ... other content */}
//       {/* <Select options={options} /> */}
//       {/* ... other content */}

//       <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
//         {/* Form or other content for the modal */}
//         <form>
//           <label>
//             Name:
//             <input type="text" />
//           </label>
//           <br />
//           <label>
//             Email:
//             <input type="text" />
//           </label>
//           <br />
//           <button onClick={closeModal}>Submit</button>
//         </form>
//         <button onClick={closeModal}>Close Modal</button>
//       </Modal>
//     </div>
//   );
// };

// export default CustomNav;
