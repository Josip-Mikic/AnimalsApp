import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Favorites from "./Views/Favorites";
import Homescreen from "./Views/Homescreen";

const favorites = [];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen favorites={favorites} />} />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
