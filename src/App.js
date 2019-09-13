import React from "react";
import Header from "./components/Header"
import ApodList from "./components/ApodList"
// import styled from "styled-components";

// import "./App.css";
import { GlobalStyles } from './GlobalStyles';

function App() {
  return (
   <>
   <GlobalStyles/>
    <div className="App">
      <Header />
      <ApodList />
    </div>
    </>
  );
}

export default App;