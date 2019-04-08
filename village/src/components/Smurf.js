import React from "react";
//import axios from "axios";
import "../App.css";

const Smurf = (props) => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <h2>
        {" "}
        <strong>{props.height} tall</strong>
      </h2>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
