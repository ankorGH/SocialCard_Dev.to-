import React from "react";

const style = {
  display: "inline-block",
  width: 100,
  height: 100,
  borderRadius: 50,
  marginLeft: 5,
  float: "left"
};

const CardAvatar = props => {
  return <img src={props.image} style={style} alt="" />;
};

export default CardAvatar;
