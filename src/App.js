import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import TouristSpots from './pages/TouristSpots';
import Food from './pages/Food';
import Room from './pages/Room';
function App () {
  return(
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="tour" element={<TouristSpots/>}/>
      <Route path="food" element={<Food/>}/>
      <Route path="room" element={<Room/>}/>
    </Routes>
  )
}
export default App;