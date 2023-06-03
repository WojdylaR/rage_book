import Home from "./Pages/Home";
import React from "react";
import HeaderStyle from "./Styles/HeaderStyle";
import { Route, Routes } from "react-router-dom";
import Tattoo from "./Pages/Tatoo";
import { About } from "./Pages/About";
import Header from "./Components/Header";
import GlobalStyle from "./Styles/GlobalStyle";
import useWindowSize from "./Hook/useScreenSize";

function App() {
  
  const windowWidth = useWindowSize().width
  console.log(windowWidth)
  return (
    <div >
    <Header />
    <GlobalStyle windowWidth={windowWidth}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tattoo" element={<Tattoo />} />
        <Route path="*" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
