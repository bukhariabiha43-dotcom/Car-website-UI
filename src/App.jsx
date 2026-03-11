import { useState } from "react";
import BargainBuys from "./component/BargainBuys";
import Brands from "./component/Brands";
import Delarship from "./component/Delarship";
import Dropdowns from "./component/Dropdowns";
import FeatureCar from "./component/FeatureCar";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Parent from "./component/Section2/Perent"
import Footer from "./Footer";
import StateSection from "./StateSection";

function App() {

  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Navbar
        setShowAuth={setShowAuth}
        setIsLogin={setIsLogin}
      />

      {/* Auth Section */}
      {showAuth && (
        <Parent
          isLogin={isLogin}
          setIsLogin={setIsLogin}
        />
      )}

      <Hero />
      <FeatureCar />
      <BargainBuys />
      <Brands />
      <StateSection />
      <Delarship />
      <Footer />

    </>
  )
}
export default App