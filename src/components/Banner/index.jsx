import React from "react";
import "./style.css";

function Banner() {
  return (
    <div id="jumbo" className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4 bannerText">User Directory</h1>
        <p className="lead bannerText">Search & Sort Users by First Name</p>
      </div>
    </div>
  );
}

export default Banner;
