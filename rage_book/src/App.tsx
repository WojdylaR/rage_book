import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Tattoo from "./Pages/Tatoo";
import { About } from "./Pages/About";
import Header from "./Components/Header";
import GlobalStyle from "./Styles/GlobalStyle";
import useWindowSize from "./Hook/useScreenSize";
import Flash from "./Pages/Flash";
import Contact from "./Pages/Contact";
import Info from "./Pages/Info";
import PageStyle from "./Styles/PageStyle";
import './Styles/font.css'
import Loading from "./Components/loading";


export const LanguageContext = createContext({
  language: 'fr',
  toggleLanguage: () => {}
})


function App() {
  
  const windowWidth = useWindowSize().width
  console.log(windowWidth)
  

  const [charging, setCharging] = useState(true)
  const [language, setLanguage] = useState('fr')
  const toggleLanguage = () =>{
    setLanguage(l => l === 'fr' ? 'en' : 'fr');
  }

  const value = {
    language,
    toggleLanguage
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCharging(false);
    }, 2500);

    // Nettoie le timeout lors du démontage du composant
    return () => clearTimeout(timeoutId);
  }, []); 

  if (charging){
    return (
      <Loading />
    )
  }else{
  return (
    <div >
      <LanguageContext.Provider value={value}>
      <Header />
      <GlobalStyle windowWidth={windowWidth}/>
      <PageStyle>
      <Routes>
        <Route path="/" element={<Tattoo />} />
        <Route path="/about" element={<About />} />
        <Route path="/flash" element={<Flash />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </PageStyle>
      </LanguageContext.Provider>
    </div>
  );
}}

export default App;
