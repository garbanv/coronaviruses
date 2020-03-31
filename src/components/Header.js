import React from 'react';
import logoIcon from './img/virus.png'

const Header = ()=>{
return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
  <a className="navbar-brand" href="/"><img src={logoIcon} /> Información Coronavirus </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <p className="nav-link"><i className="fas fa-phone"></i> Emergencias 061 o 112 </p>
      </li>
    </ul>
  </div>
  </div>
</nav>
)};



export default Header;




