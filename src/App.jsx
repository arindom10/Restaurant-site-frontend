import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Header />
      <Banner />
    </div>
  );
};

export default App;
