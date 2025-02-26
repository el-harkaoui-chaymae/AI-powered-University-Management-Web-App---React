import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/dashboard.css"; // Import the CSS file
import { Link } from "react-router-dom";


import Filliere from "./filliere"; 
import Professeur from "./professeur"; 
import Admin_Dashboard_Content from "./admin_dashboard"; 
import Chatbot from "./chatbot";
import Module from "./module";
import Etudiant from "./etudiant";
import Notification from "./notification";



const CurrentDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Met à jour chaque seconde

    return () => clearInterval(intervalId); // Nettoyage de l'intervalle lors du démontage
  }, []);

  // Formatage de la date et de l'heure
  const formattedDate = dateTime.toLocaleDateString();
  const formattedTime = dateTime.toLocaleTimeString();

  return (
    <span style={{ fontFamily: "calibri", fontSize: "16px" }}>
      {formattedDate} {"--"} {formattedTime} {/* Espace entre date et heure */}
    </span>
  );
};

{
  /*-----------------------------------*/
}
function Admin_Menu({ children }) {
  
 

  {/*btns styling ---------------------------------------------------------------------------*/}


  const [selectedButton, setSelectedButton] = useState("dashboard");
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const getButtonStyle = (buttonId) => ({
    backgroundColor:
      selectedButton === buttonId
        ? "rgba(4, 4, 4, 0.77)"
        : hoveredButton === buttonId
        ? "#ECECEC"
        : "white",
    color: selectedButton === buttonId ? "white" : "black",
    
  });
  


  {/*----------------------------------------------------------------------------*/}


   // Determine which content to display based on the selected button
   const renderContent = () => {
    switch (selectedButton) {
      case "dashboard":
        return <Admin_Dashboard_Content />; // Display dashboard content
      case "fillieres":
        return <Filliere />;
        
      case "professeurs":
        return <Professeur />; 
        
      case "module":
          return <Module />;
          
      case "etudiant":
          return <Etudiant />;

      case "notifications":
            return <Notification />;    

      case "chatbot":
        return <Chatbot />;  

      default:
        return <Admin_Dashboard_Content/>; // Default content
    }
  };




  

  return (

    <div className="d-flex flex-row p-3 pb-3" style={{backgroundColor:'white'}}>
      {/*big container 1*/}
      {/* First Sidebar  -----------------------------------------------------------------------------------*/}
      <div
        className="d-flex flex-column p-3 rounded-4 shadow-lg me-5 pt-4 position-fixed"
        style={{ backgroundColor: "white",  height:'96vh',width:"28vh",zIndex: 0 }}
      >
        {/* Header */}
        <div
          className="mb-4 d-flex justify-content-center"
          style={{
            fontFamily: "segoe print",
            color: "#C9A13C",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          <img
            src="menu.png"
            alt="menu Icon"
            style={{ width: "40px", height: "auto" }} 
            className="me-3"
          />
        </div>

        <hr className="custom-hr" />
        <br />

        {/* Sidebar Ul */}
        <ul className="nav nav-pills flex-column mb-4">
          <li className="nav-item mb-2">
            <button
              className="p-3 pt-1 pb-1 btn btn-sm w-100 text-start d-flex align-items-center rounded-4"
              style={getButtonStyle("dashboard")}
              onClick={() => handleButtonClick("dashboard")}
              onMouseEnter={() => setHoveredButton("dashboard")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <i
                className="fa-solid fa-chalkboard me-3"
                style={{ width: "20px" }}
              ></i>
              Dashboard
            </button>
          </li>
          <li className="nav-item mb-2">
            <button
              className="p-3 pt-1 pb-1 btn btn-sm w-100 text-start d-flex align-items-center rounded-4"
              style={getButtonStyle("fillieres")}
              onClick={() => handleButtonClick("fillieres")}
              onMouseEnter={() => setHoveredButton("fillieres")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <i
                className="fa-solid fa-table-cells-large me-3"
                style={{ width: "20px" }}
              ></i>
              Filliéres
            </button>
          </li>
          <li className="nav-item mb-2">
            <button
              className="p-3 pt-1 pb-1 btn btn-sm w-100 text-start d-flex align-items-center rounded-4"
              style={getButtonStyle("professeurs")}
              onClick={() => handleButtonClick("professeurs")}
              onMouseEnter={() => setHoveredButton("professeurs")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <i
                className="fa-solid fa-user-tie me-3"
                style={{ width: "20px" }}
              ></i>
              Enseignants
            </button>
          </li>
          <li className="nav-item mb-2">
            <button
              className="p-3 pt-1 pb-1 btn btn-sm w-100 text-start d-flex align-items-center rounded-4"
              style={getButtonStyle("etudiant")}
              onClick={() => handleButtonClick("etudiant")}
              onMouseEnter={() => setHoveredButton("etudiant")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <i
                className="fa-solid fa-user-graduate me-3"
                style={{ minWidth: "20px" }}
              ></i>
              Etudiants
            </button>
          </li>
          <li className="nav-item mb-2">
            <button
              className="p-3 pt-1 pb-1 btn btn-sm w-100 text-start d-flex align-items-center rounded-4"
              style={getButtonStyle("module")}
              onClick={() => handleButtonClick("module")}
              onMouseEnter={() => setHoveredButton("module")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <i
                className="fa-solid fa-layer-group me-3"
                style={{ width: "20px" }}
              ></i>
              Modules
            </button>
          </li>
          <li className="nav-item mb-2">
            <button
              className="p-3 pt-1 pb-1 btn btn-sm w-100 text-start d-flex align-items-center rounded-4 "
              style={getButtonStyle("notifications")}
              onClick={() => handleButtonClick("notifications")}
              onMouseEnter={() => setHoveredButton("notifications")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <i className="fas fa-bell me-3" style={{ width: "20px" }}></i>
              Notifications
            </button>
          </li>
        </ul>

        <hr className="border-dark" />

        {/* Profil button */}
        <button
          className="p-3 pt-1 pb-1 btn btn-sm w-100 text-start d-flex align-items-center rounded-4"
          style={getButtonStyle("profil")}
          onClick={() => handleButtonClick("profil")}
          onMouseEnter={() => setHoveredButton("profil")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <i
            className="fa-solid fa-user-large me-3"
            style={{ width: "20px" }}
          ></i>
          Profil
        </button>

        <hr className="border-dark" />

        {/* AI button */}
        <button
          className="p-3 pt-1 pb-1 btn btn-sm w-100 text-start d-flex align-items-center rounded-4"
          style={getButtonStyle("chatbot")}
          onClick={() => handleButtonClick("chatbot")}
          onMouseEnter={() => setHoveredButton("chatbot")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <i className="fa-solid fa-bolt me-3" style={{ width: "20px" }}></i>
          Chat
        </button>

        {/*go back home*/}

        <Link
          to="/"
          className="p-3 pt-1 pb-1 btn w-100  d-flex  justify-content-center rounded-4 fw-bold cn_btn mt-auto"
          style={{ color: "white" }}
        >
          Home
        </Link>

        
      </div>

      {/*big container 2*/}

      <div
        className="d-flex flex-column p-0 w-100 flex-grow-1"
        id="dashboard_content"
        style={{
          backgroundColor: "white",marginLeft: "33vh"
        }}
      >
        {/* Horizontal bar ------------------------------------------------------------------------------- */}
        <div
          className=" d-flex  p-3 mb-2 "
          style={{
            width: "100%",
            height: "60px",
            backgroundColor: "white",
          }}
        >
          {/* Afficher la date et l'heure à gauche */}
          <div className="me-auto">
            <CurrentDateTime />
          </div>

          <div className="ms-auto d-flex flex-row ">
            {" "}
            {/* push the button to the right*/}
            {/* Profil button */}
            <button
              className="p-3 pt-1 pb-1 btn btn-sm  d-flex align-items-center rounded-4"
              style={getButtonStyle("profil2")} // Pass button ID to get style
              onMouseEnter={() => setHoveredButton("profil2")} // Set hover for this button
              onMouseLeave={() => setHoveredButton(null)} // Reset hover when mouse leaves
            >
              EL HARKAOUI Chayme
              <i
                className="fa-solid fa-user-large ms-3"
                style={{ width: "20px" }}
              ></i>
            </button>
          </div>
        </div>

        {/*---------------------------------------------------------*/}

        {/*------*/}
        {renderContent()}
        {/*------*/}
      </div>
    </div>
  );
}

export default Admin_Menu;




