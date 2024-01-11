import React from "react";


// Create the header ( NavBar)
const Header = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Eighth navbar example">
    <div class="container">
      <a class="navbar-brand" href="#">Start Bootstrap</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample07">
        <ul class="navbar-nav ms-auto md-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Services</a>
          </li>
		  <li class="nav-item">
            <a class="nav-link">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
	);
};




export default Header;