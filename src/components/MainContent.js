import React from "react";
import GenrePicker from "./GenrePicker.js";
import AlbumList from "./AlbumList.js";

function MainContent() {
  return <main>{
    <>
      <GenrePicker />
      <AlbumList />
    </>
  }</main>;
}

export default MainContent;
