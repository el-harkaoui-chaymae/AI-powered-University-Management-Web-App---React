import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/dashboard.css"; // Import the CSS file
import CustomChart from "./customChart";

function Etudiant() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [activeModalId, setActiveModalId] = useState(null);
  const [expandedRows, setExpandedRows] = useState([]); // Tracks rows with expanded collapsibles
  
    const toggleExpandRow = (rowId) => {
      setExpandedRows((prev) =>
        prev.includes(rowId) ? prev.filter((id) => id !== rowId) : [...prev, rowId]
      );
    };

  const getButtonStyle = (buttonId) => ({
    minWidth: "80px",
    backgroundColor: hoveredButton === buttonId ? "#ECECEC" : "white",
    fontFamily: "corbel",
  });

  const toggleModal = (modalId) => {
    setActiveModalId(activeModalId === modalId ? null : modalId);
  };



  {/*----------------------------------------------------------------------------*/}

  const data = {
    labels: [" Mod1", "Mod2", "Mod3","Mod4","Mod5","Mod6","Mod7","Mod8","Mod9","Mod10","Mod11"], 
    datasets: [
      {
        label: "Elmt1",
        data: [14, 17.49,19,16.88,15.39,18.5,13.7,15.9,16.33,12,19], 
        backgroundColor: "rgba(230, 194, 85, 0.67)",
        borderColor: "rgba(230, 194, 85, 0.52)",
        borderWidth: 0,
      },
      {
        label: "Elmt2",
        data: [16, 18.49,13,15.88,17.39,13.5,17.7,14.9,19.33,16,14], 
        backgroundColor: "rgba(9, 98, 241, 0.32)",
        borderColor: "rgba(9, 98, 241, 0.52)",
        borderWidth: 0,
      },
      
    ],
  };


  const data2 = {
    labels: [" Mod1", "Mod2", "Mod3","Mod4","Mod5","Mod6","Mod7","Mod8","Mod9","Mod10","Mod11"], 
    datasets: [
      {
        label: "Moyenne",
        data: [14, 17.49,19,16.88,15.39,18.5,13.7,15.9,16.33,12,19], 
        backgroundColor: "rgba(68, 193, 40, 0.45)",
        borderColor: "rgba(68, 193, 40, 0.52)",
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
    <div
      className="d-flex flex-column p-3 align-items-center"
      style={{ backgroundColor: "white" }}
    >
      {/*Header Div---------------------------------------------------------------------*/}
      <div
        className="rounded-3 p-3 d-flex shadow-lg justify-content-between"
        style={{
          background:
            "linear-gradient(to right,rgba(4, 4, 4, 0.77),rgba(4, 4, 4, 0.77), rgba(45, 79, 39, 0.77), rgba(96, 54, 39, 0.77))",
          width: "95%",
          marginBottom: "-40px",
          zIndex: 1,
        }}
      >
        <h4 style={{ color: "white", fontFamily: "corbel" }}>
          Les Etudiants Ingénieurs
        </h4>

        {/*ajouter un Etudiant*/}
        <button
          class="d-flex p-5 pt-0 pb-0 btn btn-sm rounded-4 justify-content-center align-items-center"
          style={{ backgroundColor: "white" }}
          onClick={() => toggleModal("modal4")}
        >
          <i
            className="fa-solid fa-plus me-3"
            style={{ color: "rgb(36, 154, 167)" }}
          ></i>
          Etudiant
        </button>
      </div>

      {/*Table Div----------------------------------------------------------------------*/}
      <div
        className="d-flex p-3 flex-column shadow-lg rounded-3 pt-5 w-100 border"
        style={{
          backgroundColor: "white",
          position: "relative",
          zIndex: 0,
        }}
      >
        <div className="p-1 pt-3">
          <table className="table">
            <thead>
              <tr>
                <th style={{ color: "rgb(165, 168, 164)" }}>CIN</th>
                <th style={{ color: "rgb(165, 168, 164)" }}>NOM</th>
                <th style={{ color: "rgb(165, 168, 164)" }}>PRENOM</th>
                <th style={{ color: "rgb(165, 168, 164)" }}>CLASSE</th>

                <th
                  className="text-center align-middle"
                  style={{ color: "rgb(165, 168, 164)" }}
                >
                  NOTES
                </th>

                <th
                  className="text-center align-middle"
                  style={{ color: "rgb(165, 168, 164)" }}
                >
                  INFORMATION
                </th>
                <th
                  className="text-center align-middle"
                  style={{ color: "rgb(165, 168, 164)" }}
                >
                  MODIFICATION
                </th>
                <th
                  className="text-center align-middle"
                  style={{ color: "rgb(165, 168, 164)" }}
                >
                  SUPPRESSION
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>I384756</td>
                <td>ESSAIDI</td>
                <td>DOUNIA</td>
                <td>IID2</td>
                <td className="text-center align-middle">
                  <button
                    className="btn btn-sm rounded-4"
                    style={getButtonStyle("notes")}
                    onMouseEnter={() => setHoveredButton("notes")}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={() => toggleExpandRow("row1")}
                  >
                    <i
                      className="fa-solid fa-plus"
                      style={{ width: "40px", color: "rgb(60, 201, 192)" }}
                    ></i>
                  </button>
                </td>
                <td className="text-center align-middle">
                  <button
                    className="btn btn-sm rounded-4"
                    style={getButtonStyle("info")}
                    onMouseEnter={() => setHoveredButton("info")}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={() => toggleModal("modal1")}
                  >
                    <i
                      className="fa-solid fa-eye"
                      style={{ width: "40px", color: " #C9A13C" }}
                    ></i>
                  </button>
                </td>
                <td className="text-center align-middle">
                  <button
                    className="btn btn-sm rounded-4"
                    style={getButtonStyle("mod")}
                    onMouseEnter={() => setHoveredButton("mod")}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={() => toggleModal("modal2")}
                  >
                    <i
                      className="fa-solid fa-pen"
                      style={{ width: "20px", color: "rgb(38, 187, 110)" }}
                    ></i>
                  </button>
                </td>
                <td className="text-center align-middle">
                  <button
                    className="btn btn-sm rounded-4"
                    style={getButtonStyle("sup")}
                    onMouseEnter={() => setHoveredButton("sup")}
                    onMouseLeave={() => setHoveredButton(null)}
                    onClick={() => toggleModal("modal3")}
                  >
                    <i
                      className="fa-solid fa-trash"
                      style={{ width: "20px", color: "red" }}
                    ></i>
                  </button>
                </td>
              </tr>

              {/* Collapsible 1 Section to show Marks*/}
              {expandedRows.includes("row1") && (
                <tr>
                  <td colSpan="8">
                    <div
                      className="p-1 rounded-3"
                      style={{ background:"linear-gradient(to right,rgba(68, 65, 52, 0.3),rgba(68, 65, 52, 0.3)" }}
                    >
                      {/* Content inside the collapsible */}
                      <div
                        class="d-flex flex-row p-3 rounded-3 "
                        style={{ backgroundColor: "white" }}
                      >
                        <div class='w-100 me-5 p-3' style={{}}>
                            {/*------*/}
                            <CustomChart data={data2} options={options} />
                            {/*------*/}
                        </div>

                        <div class='w-100 p-3' style={{}}>
                            {/*------*/}
                            <CustomChart data={data} options={options} />
                            {/*------*/}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modals */}

      {/*Informations*/}
      {activeModalId === "modal1" && (
        <div
          className="modal show "
          style={{
            display: "block",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 3,
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content ">
              <div className="modal-header">
                <h4
                  className="modal-title"
                  style={{ fontFamily: "corbel", color: " #C9A13C" }}
                >
                  Information
                </h4>
              </div>
              <div className="modal-body d-flex flex-row align-items-center justify-content-center ">
                <div className="p-1 pt-3 w-100">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td>TELEPHONE</td> <td>07934857</td>
                      </tr>
                      <tr>
                        <td>MAIL</td> <td>douniaessadi@usms.ma</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => toggleModal("modal1")}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*Modification*/}
      {activeModalId === "modal2" && (
        <div
          className="modal show"
          style={{
            display: "block",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 4,
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4
                  className="modal-title"
                  style={{ fontFamily: "corbel", color: "rgb(38, 187, 110)" }}
                >
                  Mise à jour
                </h4>
              </div>
              <div className="modal-body">
                <div class="d-flex flex-column p-3">
                  <input
                    type="text"
                    className="form-control mb-4"
                    id="exampleInput"
                    placeholder="Nouveau Téléphone"
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInput"
                    placeholder="Nouveau Mail"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => toggleModal("modal2")}
                >
                  Mettre à jour
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*Suppression*/}
      {activeModalId === "modal3" && (
        <div
          className="modal show"
          style={{
            display: "block",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 5,
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4
                  className="modal-title"
                  style={{ fontFamily: "corbel", color: "red" }}
                >
                  Suppression
                </h4>
              </div>
              <div className="modal-body">
                <p>Êtes-vous sûr de vouloir retirer cet étudiant du système ?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => toggleModal("modal3")}
                >
                  Retour
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => toggleModal("modal3")}
                >
                  Oui
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/*ajouter*/}
      {activeModalId === "modal4" && (
        <div
          className="modal show"
          style={{
            display: "block",
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 6,
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4
                  className="modal-title"
                  style={{ fontFamily: "corbel", color: " #008080" }}
                >
                  Nouveau Etudiant
                </h4>
              </div>
              <div className="modal-body">
                <div class="d-flex flex-column p-3">
                  <input
                    type="text"
                    className="form-control mb-4"
                    id="exampleInput"
                    placeholder="CIN"
                  />
                  <input
                    type="text"
                    className="form-control mb-4"
                    id="exampleInput"
                    placeholder="Nom"
                  />

                  <input
                    type="text"
                    className="form-control mb-4"
                    id="exampleInput"
                    placeholder="Prénom"
                  />

                  <input
                    type="text"
                    className="form-control mb-4"
                    id="exampleInput"
                    placeholder="Mail"
                  />

                  <input
                    type="text"
                    className="form-control mb-4"
                    id="exampleInput"
                    placeholder="Téléphone"
                  />

                  <select className="form-control mb-4" defaultValue="">
                    <option value="" disabled>
                      Choisissez une filière
                    </option>
                    <option value="IID">IID</option>
                    <option value="GI">GI</option>
                    <option value="GE">GE</option>
                  </select>

                  <select className="form-control mb-4" defaultValue="">
                    <option value="" disabled>
                      Choisissez une classe
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>

                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => toggleModal("modal4")}
                >
                  Inserer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Etudiant;
