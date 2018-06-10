import React from "react";
import CardImage from "./card/card_image";
import CardAvatar from "./card/card_avatar";
import CardTitle from "./card/card_title";
import CardSave from "./card/card_save";
import CardSocial from "./card/card_social";
import CardHandle from "./card/card_handle";

const Card = props => {
  return (
    <div>
      <CardImage image="http://www.w3.org/TR/2004/PR-DOM-Level-3-Core-20040205/images/dom-architecture.png" />
      <CardAvatar image="https://avatars0.githubusercontent.com/u/28383750?s=460&v=4" />
      <CardTitle title="How to use .forEach() in DOM Elements" />
      <CardHandle name="@ankorgh" />
      <CardSocial />
      <CardSave />
    </div>
  );
};

export default Card;
