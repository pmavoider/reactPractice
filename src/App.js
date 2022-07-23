import './App.css';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import Header from "./components/Header"
import Footer from "./components/Footer"
import {Routes, Route} from"react-router-dom"
import ContactPage from "./pages/ContactPage"
import HomePage from "./pages/HomePage"
import CampsitesDetailPage from "./pages/CampsiteDetailPage";
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutUs from "./pages/AboutPage"



function App() {
  return (
    <div className='App'>
   <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="directory" element={<CampsitesDirectoryPage />} />
      <Route 
        path="directory/:campsiteId"
        element={<CampsiteDetailPage />}
        />
        <Route path="about" element={<AboutUs />} />
    </Routes>
    <Footer />
</div>
  );
}

export default App;
