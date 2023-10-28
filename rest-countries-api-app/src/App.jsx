import "./main.css";
import {Routes , Route} from 'react-router-dom'
import Home from "./pages/Home";
import RegionDetail from "./pages/RegionDetail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/country/:id" element={<RegionDetail/>} />
      <Route path="/:id" element={<RegionDetail/>} />
      <Route path="*" element={<Home />} />
    </Routes>
    
    
  );
}

export default App;
