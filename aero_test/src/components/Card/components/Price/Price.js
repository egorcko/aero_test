import React from "react";
import "./Price.scss";

const Price = ({ value }) => {
  return (
    <div className="Price">
      <h2 className="Price__value">{value} руб.</h2>
      <h4 className="Price__bonus">+490 бонусов</h4>
    </div>
  );
};

Price.defaultProps = {
  value: "49 999"
};

export default Price;
