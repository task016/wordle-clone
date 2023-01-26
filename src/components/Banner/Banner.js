import React from "react";

function Banner({ variant, children }) {
  return <div className={`banner ${variant}`}>{children}</div>;
}

export default Banner;
