import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img
        className="food-img"
        src="https://images.squarespace-cdn.com/content/v1/59008bd5d2b857cbcdd1ae02/1565478564981-A4QC3RX7PNXM8HKK7L15/ke17ZwdGBToddI8pDm48kPBUJOMJB7Xyb8lf-TUFEw17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVf-fAAQQfzp-EKpc6gWDPgmq6_Ivihz9Gzp-5reVi7Ozvez3AUP9-an2l1v_mW1vg/Amatosmenu50.jpg"
      ></img>
      <img
        className="food-img"
        src="https://thegirlonbloor.com/wp-content/uploads/2020/04/Hibachi-Chicken-17.jpg"
      ></img>
      <img
        className="food-img"
        src="https://cdn.kievdelivery.com/upload/products/371/thumbs/5cf6d7ff3f1709.05089115.jpeg"
      ></img>
    </div>
  </div>,
  document.getElementById("root")
);
