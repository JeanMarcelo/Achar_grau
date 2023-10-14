import React from "react";

const Calculation = (props) => {
  const vstring = props.variante;
  const vint = parseInt(vstring, 10);
  const standard = 90;
  const mmstd = 50;
  var times = vint * standard;
  var vfinal = times / mmstd;
  return (
    <div>
      <p>{vfinal}°</p>
    </div>
  );
};

export default Calculation;
