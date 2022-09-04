import React, { useState } from "react";

function Header({onDarkModeClick, dark}){
    return(
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {dark ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}
export default Header;