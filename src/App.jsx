import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
import WhyChooseUs from "./Components/WhyChooseUs/WhyChooseUs";
import AboutUs from "./Components/AboutUs/AboutUs";
import Footer from "./Components/Footer/Footer";
import Popup from "./Components/Popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar handlePopup={handlePopup} />
      <Header />
      <Banner />
      <WhyChooseUs />
      <AboutUs handlePopup={handlePopup} />
      <Banner />
      <Footer />
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
    </div>
  );
};

export default App;
