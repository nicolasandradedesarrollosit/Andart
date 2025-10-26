import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Marketing from './pages/Marketing';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/marketing" element={<Marketing />} />
    </Routes>
  );
}

export default App;
