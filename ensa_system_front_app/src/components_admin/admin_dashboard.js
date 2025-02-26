import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/dashboard.css"; // Import the CSS file



import CustomChart from "./customChart";




{
  /*-----------------------------------*/
}
function Admin_Dashboard_Content() {
 

  const [selected, setSelected] = useState("IID");

  const handleSelect = (text) => {
    setSelected(text);
  };



  {/*----------------------------------------------------------------------------*/}

  const data = {
    labels: [" IID1", "IID2", "IID3"], 
    datasets: [
      {
        label: "Professeur",
        data: [75, 36, 50], // Replace with the actual number of professors
        backgroundColor: "rgba(40, 193, 68, 0.32)",
        borderColor: "rgba(75, 192, 192, 0.68)",
        borderWidth: 0,
      },
      {
        label: "Etudiant",
        data: [150, 120, 200], // Replace with the actual number of students
        backgroundColor: "rgba(9, 98, 241, 0.32)",
        borderColor: "rgba(9, 98, 241, 0.68)",
        borderWidth: 0,
      },
      {
        label: "Modules",
        data: [25, 18, 30], // Replace with the actual number of modules
        backgroundColor: "rgba(195, 35, 160, 0.32)",
        borderColor: "rgba(195, 35, 160, 0.68)",
        borderWidth: 0,
      },
    ],
  };



  
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  
{/*----------------------------------------------------------------------------*/}



  return (


    <div className="d-flex  flex-column p-3 pb-0 flex-grow-1">

      {/* statistics */}
      <div
          className=" d-flex  p-3  justify-content-between align-items-center mb-2"
          style={{
            width: "100%",
            backgroundColor: "white",
          }}
        >
          
          {/* nbre Filliere */}
          <div
            class=" flex-rows rounded-3 shadow p-3 me-4 "
            style={{
              width: "30%",
              height: "auto",
              backgroundColor: "white",
            }}
          >
            {/* text + btn with icon */}
            <div class="d-flex flex-row justify-content-between mb-3">
              <div
                class="d-flex flex-column"
                style={{
                  backgroundColor: "white",
                }}
              >
                <h5
                  class="mb-1"
                  style={{ color: "#C9A13C", fontFamily: "corbel" }}
                >
                  Total des Filliéres
                </h5>
                <h4
                  style={{
                    color: "black",
                    fontFamily: "consolas",
                    fontWeight: "bold",
                  }}
                >
                  7
                </h4>
              </div>

              <div
                class="d-flex flex-row"
                style={{
                  backgroundColor: "white",
                }}
              >
                <button className="p-4 pt-1 pb-1" type="button" class="btnn">
                  <div id="container-stars">
                    <div id="stars"></div>
                  </div>

                  <div id="glow">
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                  <i
                    className="fa-solid fa-table-cells-large"
                    style={{ width: "20px", color: "white" }}
                  ></i>
                </button>
              </div>
            </div>

            <hr className="custom-hr"></hr>
            {/* */}
            <div class="d-flex flex-row justify-content-center align-items-center">
              <h6
                class="me-2"
                style={{
                  color: "green",
                  fontFamily: "segoe print",
                  fontWeight: "bold",
                }}
              >
                {" "}
                +2{" "}
              </h6>
              <h6 style={{ color: "gray", fontFamily: "segoe print" }}>
                Nouvelles Filliéres{" "}
              </h6>
            </div>
          </div>

          {/* nbre Prof */}
          <div
            class=" flex-rows rounded-3 shadow p-3 me-4 "
            style={{
              width: "30%",
              height: "auto",
              backgroundColor: "white",
            }}
          >
            {/* text + icon */}
            <div class="d-flex flex-row justify-content-between mb-3">
              <div
                class="d-flex flex-column"
                style={{
                  backgroundColor: "white",
                }}
              >
                <h5
                  class="mb-1"
                  style={{ color: "#C9A13C", fontFamily: "corbel" }}
                >
                  Total des Professeurs
                </h5>
                <h4
                  style={{
                    color: "black",
                    fontFamily: "consolas",
                    fontWeight: "bold",
                  }}
                >
                  123
                </h4>
              </div>

              <div
                class="d-flex flex-row"
                style={{
                  backgroundColor: "white",
                }}
              >
                <button className="p-4 pt-1 pb-1" type="button" class="btnn">
                  <div id="container-stars">
                    <div id="stars"></div>
                  </div>

                  <div id="glow">
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                  <i
                    className="fa-solid fa-user-tie"
                    style={{ width: "20px", color: "white" }}
                  ></i>
                </button>
              </div>
            </div>

            <hr className="custom-hr"></hr>
            {/* */}
            <div class="d-flex flex-row justify-content-center align-items-center">
              <h6
                class="me-2"
                style={{
                  color: "green",
                  fontFamily: "segoe print",
                  fontWeight: "bold",
                }}
              >
                +5
              </h6>
              <h6 style={{ color: "gray", fontFamily: "segoe print" }}>
                Nouveaux Professeurs{" "}
              </h6>
            </div>
          </div>

          {/* nbre Etudiants */}
          <div
            class=" flex-rows rounded-3 shadow p-3 "
            style={{
              width: "30%",
              height: "auto",
              backgroundColor: "white",
            }}
          >
            {/* text + icon */}
            <div class="d-flex flex-row justify-content-between mb-3">
              <div
                class="d-flex flex-column"
                style={{
                  backgroundColor: "white",
                }}
              >
                <h5
                  class="mb-1"
                  style={{ color: "#C9A13C", fontFamily: "corbel" }}
                >
                  Total des Etudiants
                </h5>
                <h4
                  style={{
                    color: "black",
                    fontFamily: "consolas",
                    fontWeight: "bold",
                  }}
                >
                  786
                </h4>
              </div>

              <div
                class="d-flex flex-row"
                style={{
                  backgroundColor: "white",
                }}
              >
                <button className="p-4 pt-1 pb-1" type="button" class="btnn">
                  <div id="container-stars">
                    <div id="stars"></div>
                  </div>

                  <div id="glow">
                    <div class="circle"></div>
                    <div class="circle"></div>
                  </div>
                  <i
                    className="fa-solid fa-user-graduate"
                    style={{ width: "20px", color: "white" }}
                  ></i>
                </button>
              </div>
            </div>

            <hr className="custom-hr"></hr>
            {/* */}
            <div class="d-flex flex-row justify-content-center align-items-center">
              <h6
                class="me-2"
                style={{
                  color: "green",
                  fontFamily: "segoe print",
                  fontWeight: "bold",
                }}
              >
                {" "}
                +30{" "}
              </h6>
              <h6 style={{ color: "gray", fontFamily: "segoe print" }}>
                Nouveaux Etudiants{" "}
              </h6>
            </div>
          </div>
        </div>


        {/*  Charts  ---------------------------------------------------------*/}
        
                <div
                  className=" d-flex  p-3    justify-content-center align-items-center justify-content-between mt-auto"
                  style={{ width: "100%", backgroundColor: "white" }}
                >
                  {/* Histogram  */}
        
                  <div
                    class="d-flex flex-column rounded-3 shadow-lg me-4 pb-0"
                    style={{
                      width: "60%",
                      height: "auto",
                      backgroundColor: "white",
                    }}
                  >
                    {/*Bar Filliere*/}
                    <div
                      class=" d-flex flex-row rounded-3  justify-content-between align-items-center  p-3 pb-1 mb-2"
                      style={{
                        height: "70%",
                        width: "100%",
                        backgroundColor: "white",
                      }}
                    >
                      {/*drop down btn*/}
                      <div className="dropdown p-1  rounded-3 ">
                        <button
                          className="btn btn-secondary dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="true"
                          style={{ color: "black", backgroundColor: "white" }}
                        >
                          {selected}
                        </button>
        
                        <ul className="dropdown-menu">
                          <li>
                            <a
                              className="dropdown-item"
                              href=""
                              onClick={(event) => {
                                event.preventDefault(); // Empêche le rechargement de la page
                                handleSelect("IID");
                              }}
                            >
                              IID
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href=""
                              onClick={(event) => {
                                event.preventDefault(); // Empêche le rechargement de la page
                                handleSelect("GI");
                              }}
                            >
                              GI
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href=""
                              onClick={(event) => {
                                event.preventDefault(); // Empêche le rechargement de la page
                                handleSelect("IRIC");
                              }}
                            >
                              IRIC
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
        
                    {/*Plot*/}
                    <div
                      class="rounded-3 p-4"
                      style={{
                        height: "30%",
                        width: "100%",
                        backgroundColor: "white",
                      }}
                    >
                      {/*------*/}
                      <CustomChart data={data} options={options} />
                      {/*------*/}
                    </div>
                  </div>
        
                  {/* Visualisation bot */}
        
                  <div
                    class="d-flex flex-column rounded-3 shadow-lg p-4 align-items-center"
                    style={{
                      width: "40%",
                      height: "100%",
                      backgroundColor: "white",
                    }}
                  >
                    <h6
                      class="mb-3"
                      style={{
                        color: "#008080",
                        fontFamily: "corbel",
        
                        fontSize: "20px",
                      }}
                    >
                      {" "}
                      Visualisez vos données avec la puissance de l'IA
                    </h6>
        
                    <hr class="custom-hr" style={{ width: "100%" ,height: "4px"}} />
        
                    <div
                      className="d-flex flex-column align-items-center justify-content-center h-100"
                      style={{ backgroundColor: "white" }} // Adjust as needed
                    >
                      <img
                        src="pp.png"
                        alt="chatbot Icon"
                        className="mt-2 mb-3"
                        style={{ width: "100px", height: "auto" }} // Set size of the image
                      />
        
                      <h6
                        className="mb-2"
                        style={{ textAlign: "center", fontFamily: "segoe print" }}
                      >
                        Comment puis-je vous aider ?
                      </h6>
        
                      <img
                        src="plots.png"
                        alt="chatbot Icon"
                        className="mt-2 mb-5"
                        style={{ width: "200px", height: "auto" }} // Set size of the image
                      />
                    </div>
        
                    {/* Chat Input Area */}
        
                    <div className="d-flex felx-row w-100 mt-auto">
                      {/* Text Input */}
                      <textarea
                        className="form-control pe-2"
                        rows="1"
                        placeholder="Tapez votre message ici..."
                        style={{
                          border: "1px solid #ccc", // Border for the textarea
                          borderRadius: "10px", // Rounded corners
                          resize: "none", // Disable resize
                        }}
                      ></textarea>
        
                      <button
                        className="btn justify-content-center align-items-center rounded-3 ms-2"
                        style={{ backgroundColor: "rgba(195, 179, 35, 0.21)" }}
                      >
                        <i
                          className="fa-solid fa-arrow-up"
                          style={{ width: "20px" }}
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>






      
    </div>
  );
}

export default Admin_Dashboard_Content;
