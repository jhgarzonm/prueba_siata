import React from "react";
import "./styles.css";

// Assets SVG
import { FocusSearch } from "../../Assets/FocusSearch";

function HeaderSearchBar({ search, setSearch, getImages }) {
  const searchInGoogle = (event) => {
    setSearch(event?.target.value);
    console.log(search);
  };

  const searchInApi = () => {
    getImages();
  };

  return (
    <React.Fragment>
      <div className="search-header">
        <section className="logo-header">
          <img
            className="logo-busqueda"
            alt="Altavista"
            src="https://cdn.worldvectorlogo.com/logos/altavista-search-1.svg"
          />
        </section>
        <section className="searching-tools">
          <div className="search-bar">
            <input
              className="center-bar-header"
              onChange={searchInGoogle}
              value={search}
            />
            
            <div className="search-button" onClick={searchInApi}>
              <FocusSearch color={"#4285F4"} className={"focus-button"} />
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export { HeaderSearchBar };