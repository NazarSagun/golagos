import React from "react";
import "./index.css";

const BackDrop = ({ close }) => {
  return <div onClick={close} className="backdrop" />;
};

export default BackDrop;