import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import HomePage from './pages/HomePage/HomePage'; 
import MenuPage from './pages/MenuPage/MenuPage';
import AboutPage from "./pages/AboutPage/AboutPage";
import TeamPage from "./pages/TeamPage/TeamPage";
import Layout from "./pages/LayoutPage/LayoutPage"; 
import BookingForm from "./pages/BookingForm/BookingForm";


function App() {
  return (
    <Router>
      <Layout> 
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home Page */}
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/book" element={<BookingForm />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
