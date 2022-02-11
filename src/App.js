import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Favorites from "./Views/Favorites";
import Homescreen from "./Views/Homescreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
