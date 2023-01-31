import React from "react";
import "./style.css";

// Assets SVG
import { CameraSearch } from "../../Assets/CameraSearch";
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
            alt="google"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          />
        </section>
        <section className="searching-tools">
          <div className="search-bar">
            <FocusSearch className={"focus"} />
            <input
              className="center-bar-header"
              onChange={searchInGoogle}
              value={search}
            />
            <CameraSearch />
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