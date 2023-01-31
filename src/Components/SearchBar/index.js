import React, { useContext, useState } from "react";
import { HeaderSearchBar } from "../HeaderSearchBar";
import { MainSearchBar } from "../MainSearchBar";
import { SearchContext } from "../../SearchContext";


function SearchBar() {
  const {activeSearch, setActiveSearch, search, setSearch, images, setImages, getImages} = useContext(SearchContext)
  
  // useEffect(() => {
  //   getImages();
  // }, []);

  return (
    <React.Fragment>
      {activeSearch && search !== "" ? (
        <HeaderSearchBar
          search={search}
          setSearch={setSearch}
          getImages={getImages}
        />
      ) : (
        <MainSearchBar
          activeSearch={activeSearch}
          setActiveSearch={setActiveSearch}
          search={search}
          setSearch={setSearch}
          getImages={getImages}
        />
      )}
    </React.Fragment>
  );
}

export { SearchBar };