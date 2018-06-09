import React from "react";

const style = {
  width: 300,
  listStyleType: "none",
  display: "inline-block",
  paddingLeft: 8
};

const styleLI = {
  display: "inline",
  marginLeft: 8
};

const styleIMG = {
  width: 25
};

const CardSocial = props => {
  return (
    <ul style={style}>
      <li style={styleLI}>
        <img
          style={styleIMG}
          src="https://uploads.codesandbox.io/uploads/user/088144fe-9b24-4392-bbce-f9e8c75ad6b3/zr0G-baseline-favorite-24px.png"
          alt=""
        />
        <span>12.1k</span>
      </li>
      <li style={styleLI}>
        <img
          style={styleIMG}
          src="https://uploads.codesandbox.io/uploads/user/088144fe-9b24-4392-bbce-f9e8c75ad6b3/6e1P-baseline-mode_comment-24px.png"
          alt=""
        />
        <span style={{ marginTop: -10 }}>12.1k</span>
      </li>
    </ul>
  );
};

export default CardSocial;
