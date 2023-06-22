import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <a className="navbar-brand" href="#">Logo</a> */}
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav"  style={{marginLeft:'25px'}}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Skin Care</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Body &amp; Hand</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Hair</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Fragrance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Kits &amp; Travel</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Gifts</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Read</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Stores</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Facial Appointments</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;