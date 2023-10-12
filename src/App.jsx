import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CarrouselPage from "./pages/CarrouselPage";
import ListPage from "./pages/ListPage";
import { Toaster } from "react-hot-toast";

import "./App.css"

function App() {
  return (
    <>
    <Toaster />
      <Router>
        <Routes>
          <Route path={"/"} element={<ListPage />} />
          <Route path="/carrousel" element={<CarrouselPage />} />
          <Route path="/list" element={<ListPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
