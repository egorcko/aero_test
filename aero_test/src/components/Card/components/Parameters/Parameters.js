import React from "react";
import "./Parameters.scss";

const Parameters = ({ params }) => {
  return (
    <div className="Parameters">
      {params.map(({ name, value }) => (
        <div className="Parameters__row" key={`param_${name}`}>
          <span className="Parameters__row_name">{name}</span>
          <span className="Parameters__row_value">{value}</span>
        </div>
      ))}
    </div>
  );
};

export default Parameters;
