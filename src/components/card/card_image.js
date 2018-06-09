import React from "react";

const style = {
  display: "block",
  width: 600,
  height: 350,
  backgroundColor: "#fff"
};

const CardImage = props => {
  return <img src={props.image} style={style} alt="" />;
};

export default CardImage;
