import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MonstersList from "./pages/MonstersList";
import MonsterDetails from "./pages/MonsterDetails";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/monsters" element={<MonstersList />} />
        <Route path="/monsters/:id" element={<MonsterDetails />} />
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
