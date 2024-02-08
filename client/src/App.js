import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "./pages/About/About";
import { Feed } from "./pages/Feed/Feed";
function App() {
  return (
    <div className="body">
      <Hero />
      <div className="main container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
