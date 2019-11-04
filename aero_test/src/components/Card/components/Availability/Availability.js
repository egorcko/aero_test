import React from "react";
import Icon from "@/components/Icon/Icon";

import "./Availability.scss";

const Availability = ({ status }) => {
  return (
    <div className="Availability">
      <Icon
        width={12}
        height={12}
        className="Availability__icon"
        src="./icons/check.svg"
      />
      <span
        className={`Availability__title ${status &&
          "Availability__title_available"}`}
      >
        {status && "В наличии"}
        {!status && "Под заказ"}
      </span>
    </div>
  );
};

export default Availability;
