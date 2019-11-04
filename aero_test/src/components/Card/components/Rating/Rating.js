import React from "react";
import Icon from "@/components/Icon/Icon";
import "./Rating.scss";

const Rating = () => {
  const ratingValue = 3;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Icon
        key={i}
        width={10}
        height={10}
        className={`Rating__star ${i < ratingValue && "Rating__star_active"}`}
        src="./icons/star.svg"
      />
    );
  }
  return <div className="Rating">{stars}</div>;
};

export default Rating;
