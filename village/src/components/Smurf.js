import React from "react";
import axios from "axios";
import "../App.css";

const Smurf = (props) => {
  const deleteSmurf = (event) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${props.id}`)
      .then((response) => {
        props.updateSmurfs(response.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="Smurf">
      <button onClick={deleteSmurf}> Delete </button>

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
