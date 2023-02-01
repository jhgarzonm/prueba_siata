import React from "react";
import "./styles.css";

// Assets SVG
import { FocusSearch } from "../../Assets/FocusSearch";

function MainSearchBar({
  activeSearch,
  setActiveSearch,
  search,
  setSearch,
  getImages,
}) {
  const searchInGoogle = (event) => {
    setSearch(event?.target.value);
    console.log(search);
  };

  const searchInApi = () => {
    setActiveSearch("true");
    getImages();
  };

  return (
    <React.Fragment>
      <section className="logo">
        <img
          className="google"
          alt="google"
          src="https://cdn.worldvectorlogo.com/logos/altavista-search-1.svg"
        />
      </section>
      <section className="searching-tools">
        <div className="search-bar">
          <input className="center-bar" onChange={searchInGoogle} />
          <div className="search-button" onClick={searchInApi}>
            <FocusSearch color={"#4285F4"} className={"focus-button"} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export { MainSearchBar };