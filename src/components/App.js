import React from "react";
import TopMenu from "./TopMenu.js";
import SideMenu from "./SideMenu.js";
import MainContent from "./MainContent.js"


function App() {
  return <div className="app-container">{
    <>
      <TopMenu />
      <SideMenu />
      <MainContent />
    </>
  }</div>;
}

export default App;
