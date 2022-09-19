import Navbar from "./components/Navbar";
import SearchAreaCity from "./components/SearchAreaCity";
import { useState } from "react";
function Home() {
  const [currentCity, setCurrentCity] = useState("Taipei");
  return (
    <div className="home">
      <Navbar />
      <div className="logo"></div>
      <div className="area-search-group">
        <SearchAreaCity
          currentCity={currentCity}
          setCurrentCity={setCurrentCity}
        />
        <button className="font-garamond search-btn">SEARCH</button>
      </div>
    </div>
  );
}
export default Home;
