import React from "react";
import { render } from "react-dom";
import Card from "./components/card";

const styles = {
  fontFamily: "sans-serif"
};

const App = () => (
  <div style={styles}>
    <Card />
  </div>
);

render(<App />, document.getElementById("root"));
