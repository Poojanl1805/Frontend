import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./components/Home";
import Chennai from "./district/Chennai"; 
import Hogenakkal from "./district/Hogenakkal"; 
import Kanyakumari from "./district/Kanyakumari"; 
import Kodaikanal from "./district/Kodaikanal"; 
import Kumbakonam from "./district/Kumbakonam"; 
import Madurai from "./district/Madurai"; 
import Ooty from "./district/Ooty"; 
import Rameshwaram from "./district/Rameshwaram"; 
import Theni from "./district/Theni"; 
import Yarcaud from "./district/Yercaud"; 

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Chennai />
      <Rameshwaram />
      <Kodaikanal />
      <Ooty />
      <Kanyakumari />
      <Kumbakonam />
      <Madurai />
      <Yarcaud />
      <Theni />
      <Hogenakkal />
    </BrowserRouter>
  );
};

export default App;
