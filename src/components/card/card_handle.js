import React from "react";

const style = {
  width: 500,
  paddingLeft: 10,
  marginTop: 2,
  fontSize: 14,
  color: "#0837DF"
};

const CardHandle = props => {
  return <span style={style}>{props.name}</span>;
};

export default CardHandle;
