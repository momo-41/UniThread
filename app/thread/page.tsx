import React from "react";
import FacultyCardList from "../component/FacultyCardList";
import SearchBox from "../component/SearchBox";

const threadPage = () => {
  return (
    <div>
      <SearchBox />
      <FacultyCardList />
    </div>
  );
};

export default threadPage;
