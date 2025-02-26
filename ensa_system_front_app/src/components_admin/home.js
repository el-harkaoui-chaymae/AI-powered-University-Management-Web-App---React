import React,{ useState, useEffect } from "react";
import "../styles/home.css"; // Import the CSS file
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Link } from "react-router-dom";





function Home() {



  
  
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom border-gray shadow-sm">
        <div class="container-fluid bb">
          {/* logo */}

          <a class="navbar-brand" href="#">
            <img src="logo1.png" alt="ensa khouribga" height="60"></img>
          </a>

          {/* menu */}

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* links ---------------------------------------------------------------------------------- */}
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {/*home*/}

              <li className="nav-item">
                <a
                  className="nav-link fw-bold position-relative"
                  aria-current="page"
                  href="#"
                  style={{
                    color: "#000",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#008080";
                    e.currentTarget.style.textDecoration = "underline";
                    e.currentTarget.style.textDecorationColor = "#008080";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#000";
                    e.currentTarget.style.textDecoration = "none";
                  }}
                >
                  Home
                </a>

                {/* About us */}
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold position-relative"
                  href="#"
                  style={{
                    color: "#000",
                    transition: "color 0.1s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#008080";
                    e.currentTarget.style.textDecoration = "underline";
                    e.currentTarget.style.textDecorationColor = "#008080";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#000";
                    e.currentTarget.style.textDecoration = "none";
                  }}
                >
                  About us
                </a>
              </li>

              {/* Contact us */}

              <li className="nav-item">
                <a
                  className="nav-link fw-bold position-relative"
                  href="#"
                  style={{
                    color: "#000",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#008080";
                    e.currentTarget.style.textDecoration = "underline";
                    e.currentTarget.style.textDecorationColor = "#008080";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#000";
                    e.currentTarget.style.textDecoration = "none";
                  }}
                >
                  Contact us
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-">
              <Link
                to="/login"
                className="btn btn-primary rounded-pill px-5 py-2 me-4 fw-bold cn_btn"
              >
                Se connecter
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* page body 1 ------------------------------------------------------------------------------------------------------*/}

      <section className="hero-section">
        <div class="container-fluid mrg ">
          <div class="row align-items-center justify-content-center ">
            {/* texts */}
            <div class="col-md-5 ">
              <h2 className="tl_st  ">
                Bienvenue sur Votre système
                <br />
                de gestion universitaire
              </h2>
              <br />
              <p className="tl2_st">
                Une plateforme dédiée à l'organisation administrative
                <br />
                Une gestion moderne pour une université connectée
                <br />
                Tout ce dont vous avez besoin en un seul endroit
              </p>
              <br />

              <Link
                to="/login"
                class="btn btn-primary rounded-pill px-5 py-2 me-4 fw-bold cn_btn"
              >
                 Accédez maintenant
              </Link>
              
            </div>
            {/* image*/}
            <div class="col-md-5 d-flex justify-content-end ">
              <img
                src="pic4.png"
                alt="Système de gestion universitaire"
                class="img-fluid"
                style={{ width: "600px", height: "auto" }}
              ></img>
            </div>
          </div>
        </div>
      </section>

      <br />

      {/*cards--------------------------------------------------------------------------------*/}

      <section>
        <div className="container mrg2 ">
          <div className="row justify-content-center">
            <div className="col-12 text-center ">
              <h2 style={{ fontFamily: "corbel", color: "gray" }}>
                Ensa khouribga en nombres
              </h2>
              <br />
              <br />
              <hr class="custom-hr"></hr>
              <br />
              <br />
              <br />
            </div>

            {/* Students Card */}
            <div className="col-md-3">
              <div className="card l-bg">
                <div className="card-statistic-3 p-4">
                  <div className="mb-4">
                    <h5 className="card-title mb-0">Etudiants</h5>
                  </div>
                  <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                      <h2 className="d-flex align-items-center mb-0">1250</h2>
                    </div>
                  </div>
                  <div className="progress mt-1" style={{ height: "8px" }}>
                    <div
                      className="progress-bar l-bg-green"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* professors Card */}
            <div className="col-md-3">
              <div className="card l-bg">
                <div className="card-statistic-3 p-4">
                  <div className="mb-4">
                    <h5 className="card-title mb-0">Professeurs Chercheurs</h5>
                  </div>
                  <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                      <h2 className="d-flex align-items-center mb-0">56</h2>
                    </div>
                  </div>
                  <div className="progress mt-1" style={{ height: "8px" }}>
                    <div
                      className="progress-bar l-bg-green"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* laboratories Card */}
            <div className="col-md-3">
              <div className="card l-bg">
                <div className="card-statistic-3 p-4">
                  <div className="mb-4">
                    <h5 className="card-title mb-0">Labaratoires</h5>
                  </div>
                  <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                      <h2 className="d-flex align-items-center mb-0">2</h2>
                    </div>
                  </div>
                  <div className="progress mt-1" style={{ height: "8px" }}>
                    <div
                      className="progress-bar l-bg-green"
                      role="progressbar"
                      style={{ width: "20%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* administartion Card */}

            <div className="col-md-3">
              <div className="card l-bg">
                <div className="card-statistic-3 p-4">
                  <div className="mb-4">
                    <h5 className="card-title mb-0">Staff Administratif</h5>
                  </div>
                  <div className="row align-items-center mb-2 d-flex">
                    <div className="col-8">
                      <h2 className="d-flex align-items-center mb-0">23</h2>
                    </div>
                  </div>
                  <div className="progress mt-1" style={{ height: "8px" }}>
                    <div
                      className="progress-bar l-bg-green"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <hr class="custom-hr"></hr>
          </div>
        </div>
        <div className=""></div>
      </section>

      {/* Contact Us Section */}

      <section className="contact-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <h2 style={{ fontFamily: "corbel", color: "gray" }}>
                Contactez-nous
              </h2>

              <br />
              <br />
              <br />
              <br />
            </div>

            {/* Contact Form and Google Map Container */}
            <div
              className="col-md-12 d-flex justify-content-center"
              style={{ height: "500px" }}
            >
              {/* Contact Form */}
              <div className="contact-form-container" style={{ flex: 1 }}>
                <form>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="nom"
                      placeholder="Entrez votre nom"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="prenom"
                      placeholder="Entrez votre prénom"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="tel"
                      className="form-control"
                      id="telephone"
                      placeholder="Entrez votre téléphone"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Entrez votre email"
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      id="message"
                      rows="4"
                      placeholder="Entrez votre message"
                    ></textarea>
                    <br />
                    <br />
                  </div>

                  <div className="d-flex justify-content-center mt-3">
                    <button
                      className="btn btn-primary rounded-pill px-5 py-2 me-4 fw-bold cn_btn"
                      type="submit"
                      style={{ width: "250px" }}
                    >
                      Envoyer
                    </button>
                  </div>
                </form>
              </div>

              {/* Google Map */}
              <div className="contact-form-container" style={{ flex: 1 }}>
                <iframe
                  title="ENSA Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4172.2911238575325!2d-6.916020184304479!3d32.897425529337156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda69d51a4eccd09%3A0x2fe5964c283fb57a!2sENSA%20-%20National%20School%20of%20Applied%20Sciences!5e0!3m2!1sen!2sma!4v1734488272846!5m2!1sen!2sma"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>

      {/* Footer */}
      <footer
        className="text-center text-lg-start text-white"
        style={{
          background: "linear-gradient(to right, #040404c5, rgb(62, 85, 83))",
        }}
      >
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Links */}
          <section>
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold ft">
                  Ensa Khouribga
                </h6>
                <br />
                <p style={{ textAlign: "justify" }}>
                  L'ENSA offre une formation initiale forte et de qualité visant
                  à former principalement des ingénieurs d'État hautement
                  qualifiés tant sur le plan scientifique que technique dans
                  diverses spécialités.
                </p>
              </div>

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold ft">
                  Contact
                </h6>
                <br />
                <p>
                  <i className="fas fa-home mr-3"></i>&nbsp; Bd Béni Amir, BP 77
                  Khouribga-Maroc
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i>&nbsp;
                  contact.ensak@usms.ma
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i>&nbsp; +212523492335 /
                  +212618534372
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i>&nbsp; 0523492339{" "}
                </p>
              </div>

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold ft">
                  Liens utiles
                </h6>
                <br />
                <p>
                  <a className="text-white" href="#">
                    Organisation
                  </a>
                </p>
                <p>
                  <a className="text-white" href="#">
                    Galerie
                  </a>
                </p>
                <p>
                  <a className="text-white" href="#">
                    Départements
                  </a>
                </p>
                <p>
                  <a className="text-white" href="#">
                    Partenaires
                  </a>
                </p>
              </div>
            </div>
            <br />

            {/* Grid row */}
          </section>
          {/* Section: Links */}

          <hr className="my-3" />

          {/* Section: Copyright */}
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              {/* Grid column */}
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                {/* Copyright */}
                <div className="p-3">© 2024 - 2025 IID2 Copyright</div>
                {/* Copyright */}
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                {/* Facebook */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                {/* Twitter */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#"
                  role="button"
                >
                  <i className="fab fa-twitter"></i>
                </a>

                {/* Google */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#"
                  role="button"
                >
                  <i className="fab fa-google"></i>
                </a>

                {/* Instagram */}
                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
      {/* Footer */}
    </div>
  );
}

export default Home;
