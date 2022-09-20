import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tour from './pages/Tour'
import TouristSpots from "./pages/Tour/TouristSpots";
import TouristDetail from "./pages/Tour/TouristDetail";
import Food from "./pages/Food";
import FoodList from "./pages/Food/FoodList";
import FoodDetail from "./pages/Food/FoodDetail";
import Room from "./pages/Room";
function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="tour" element={<Tour/>}>
        <Route index element={<TouristSpots />} />
        <Route path=":id" element={<TouristDetail />} />
      </Route>
      <Route path="food" element={<Food />}>
        <Route index element={<FoodList/>}/>
        <Route path=":id" element={<FoodDetail/>}/>
      </Route>
      <Route path="room" element={<Room />} />
    </Routes>
  );
}
export default App;
