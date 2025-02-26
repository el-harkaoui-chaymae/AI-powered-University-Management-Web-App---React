import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/dashboard.css"; // Import the CSS file

import CustomChart from "./customChart";
import { color } from "chart.js/helpers";

function Professeur() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [activeModalId, setActiveModalId] = useState(null);

  const getButtonStyle = (buttonId) => ({
    minWidth: "80px",
    backgroundColor: hoveredButton === buttonId ? "#ECECEC" : "white",
    fontFamily: "corbel",
  });

  const toggleModal = (modalId) => {
    setActiveModalId(activeModalId === modalId ? null : modalId);
  };

  return (
    <div
      className="d-flex flex-column p-3 align-items-center"
      style={{ backgroundColor: "white" }}
    >
      {/*Header Div---------------------------------------------------------------------*/}
      <div
        className="rounded-3 p-3 d-flex shadow-lg  justify-content-between"
        style={{
          background:
            "linear-gradient(to right,rgba(4, 4, 4, 0.77),rgba(4, 4, 4, 0.77), rgba(45, 79, 39, 0.77), rgba(96, 54, 39, 0.77))",
          width: "95%",
          marginBottom: "-40px",
          zIndex: 1,
        }}
      >
        <h4 style={{ color: "white", fontFamily: "corbel" }}>
          Les Enseignants Chercheurs
        </h4>

        <div class='d-flex flex-row'>
        
        {/*exporter*/}
        <button
          class="d-flex p-5 pt-0 pb-0 btn btn-sm rounded-4 justify-content-center align-items-center me-5"
          style={{ backgroundColor: "white" }}
          onClick={() => toggleModal("modal5")}
        >
          <i
            className="fa-solid fa-arrow-up-from-bracket me-3"
            style={{ color: " #008080" }}
          ></i>
          Exporter
        </button>

        {/*ajouter un prof*/}
        <button
          class="d-flex p-5 pt-0 pb-0 btn btn-sm rounded-4 justify-content-center align-items-center"
          style={{ backgroundColor: "white" }}
          onClick={() => toggleModal("modal4")}
        >
          <i
            className="fa-solid fa-plus me-3"
            style={{ color: " #008080" }}
          ></i>
          Enseignant
        </button>
        </div>
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
                <th style={{ color: "rgb(165, 168, 164)" }}>ADRESSE EMAIL</th>
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
                <td>G384765</td>
                <td>Gherabi</td>
                <td>Noreddine</td>
                <td>GHERABINOREDDINE@usms.ma</td>
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
                  style={{
                    fontFamily: "corbel",
                    color: " #C9A13C"
                    
                  }}
                >
                  Information
                </h4>
              </div>
              <div className="modal-body d-flex flex-row align-items-center justify-content-center ">
                <div className="p-1 pt-3 w-100">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td>CIN</td> <td>C495876</td>
                      </tr>

                      <tr>
                        <td>NOM</td> <td>GHERABI</td>
                      </tr>

                      <tr>
                        <td>PRENOM</td> <td>Noreddine</td>
                      </tr>

                      <tr>
                        <td>EMAIL</td> <td>GHAERABINOREDDINE@usms.ma</td>
                      </tr>

                      <tr>
                        <td>TELEPHONE</td> <td>GHAERABINOREDDINE@usms.ma</td>
                      </tr>

                      <tr>
                        <td>TOTAL D'ELEMENTS</td> <td>12</td>
                      </tr>

                      <tr>
                        <td>TOTAL DE CLASSES</td> <td>6</td>
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
                  style={{
                    fontFamily: "corbel",
                    color: "rgb(38, 187, 110)",
                  }}
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
                    placeholder="Nouveau Email"
                  />

                  <input
                    type="text"
                    className="form-control"
                    id="exampleInput"
                    placeholder="Nouveau Téléphone"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => toggleModal("modal2")}
                >
                  Modifier
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
                <p>
                  Êtes-vous sûr de vouloir retirer cet enseignant du système ?
                </p>
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
                  style={{ fontFamily: "corbel" ,color: " #008080"}}
                >
                  Nouveau Enseignant
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
                    placeholder="Email"
                  />

                  <input
                    type="text"
                    className="form-control mb-4"
                    id="exampleInput"
                    placeholder="Téléphone"
                  />
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


       {/*exporter*/}
       {activeModalId === "modal5" && (
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
                  style={{ fontFamily: "corbel" ,color: " #008080"}}
                >
                  Exporter la liste
                </h4>
              </div>
              
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => toggleModal("modal5")}
                >
                  Excel
                </button>

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => toggleModal("modal5")}
                >
                  PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Professeur;
