import React from "react";
import "./header.css";
import HeaderSocials from "./HeaderSocials";
const cartoonDaani = require("../../assets/cartoonDaani.jpg");

export default function Header(): JSX.Element {
  return (
    <header>
      <div className="container header__container">
        <div className="header__image">
          <h2>
            <p>G'day I'm Daani</p> The purpose of this page is to take you on an
            journey through my work, ask questions in the chat bot below or
            navigate to one of my pages in the nav bar above.
          </h2>
        </div>

        <div className="textbox__container">
          <input
            type="textarea"
            className="textbox__input"
            placeholder="Ask virtual Daani anything (heavily influenced by the views of Open AI's famous NPL bot"
          />
        </div>
        <h2></h2>
        <p></p>
        <HeaderSocials />
      </div>
    </header>
  );
}
