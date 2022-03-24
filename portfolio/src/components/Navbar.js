import React from "react";

const NavBar = () => {
  return <div>NavBar</div>;
};

export default NavBar;

// import React from "react";

// const NavBar = ({ currentPage, handlePageChange }) => {
//   return (
//     <ul className="nav nav-Bar">
//       <li className="nav-item">
//         <a
//           href="#home"
//           onClick={() => handlePageChange("Home")}
//           className={currentPage === "Home" ? "nav-link active" : "nav-link"}
//         >
//           Home
//         </a>
//       </li>

//       <li className="nav-item">
//         <a
//           href="#projects"
//           onClick={() => handlePageChange("Project")}
//           className={currentPage === "Project" ? "nav-link active" : "nav-link"}
//         >
//           Project
//         </a>
//       </li>

//       <li className="nav-item">
//         <a
//           href="#contact"
//           onClick={() => handlePageChange("Contact")}
//           className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
//         >
//           Contact
//         </a>
//       </li>
//     </ul>
//   );
// };

// export default NavBar;
