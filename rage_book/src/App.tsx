import React from "react";
import HeaderStyle from "./Styles/HeaderStyle";
import { Route, Routes } from "react-router-dom";
import Tattoo from "./Pages/Tatoo";
import { About } from "./Pages/About";
import Header from "./Components/Header";
import GlobalStyle from "./Styles/GlobalStyle";
import useWindowSize from "./Hook/useScreenSize";
import Flash from "./Pages/Flash";
import Booking from "./Pages/Booking";
import Contact from "./Pages/Contact";

function App() {
  
  const windowWidth = useWindowSize().width
  console.log(windowWidth)
  return (
    <div >
    <Header />
    <GlobalStyle windowWidth={windowWidth}/>
      <Routes>
        <Route path="/" element={<Tattoo />} />
        <Route path="/about" element={<About />} />
        <Route path="/flash" element={<Flash />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
