import React from "react";
import "./styles.css"



function Header() {
  return (
    <React.Fragment>
      <header>        
        <nav>
          <ul className="nav-bar">          
           <li className="profile-pic">
              JG
            </li>
            {/* <SearchedImage title={"Catar 2022"}/> */}
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
}

export { Header };