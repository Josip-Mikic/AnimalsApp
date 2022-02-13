import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Favorites from "./Views/Favorites";
import Homescreen from "./Views/Homescreen";

function App() {
  const [favorite, setFavorite] = useState([]);
  console.log(favorite);
  return (
    <div>
      <BrowserRouter>
        <Header />{" "}
        <Routes>
          <Route
            path="/"
            element={
              <Homescreen favorite={favorite} setFavorite={setFavorite} />
            }
          />
          <Route
            path="/favorites"
            element={<Favorites favorite={favorite} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
