import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import FeedPage from './pages/FeedPage/FeedPage';
import MenuPage from './pages/MenuPage/MenuPage';
import PicturePage from "./pages/PicturePage/PicturePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import TeamPage from "./pages/TeamPage/TeamPage"

import Navbar from "./pages/Navbar/Navbar";

function App() {
  return (
    <Router> {/* Wrap your routes with BrowserRouter */}
      <Navbar />
      <Routes>
        <Route path="/" element={<FeedPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/pictures" element={<PicturePage /> }/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
