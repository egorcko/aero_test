import React from "react";
import SVG from "react-inlinesvg";

const cache = {};

const result = require.context("@/assets/images/", true, /\.svg$/);

result.keys().forEach(key => {
  cache[key] = result(key);
});

function Icon({ className, width, height, src }) {
  if (!cache[src]) {
    console.error(`Not found filename @/assets/images/${src.replace("./", "")}`);
    return null;
  }

  return (
    <SVG className={className} width={width} height={height} src={cache[src]} />
  );
}

export default Icon;
