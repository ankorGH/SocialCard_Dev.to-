import React from "react";

const style = {
  width: 500,
  paddingLeft: 120,
  marginTop: 2,
  marginBottom: 2,
  fontSize: 28,
  color: "#9B9B9B"
};

const CardTitle = props => {
  return <h2 style={style}>{props.title}</h2>;
};

export default CardTitle;
