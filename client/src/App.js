import { Route, Routes } from "react-router-dom";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Feed } from "./pages/Feed/Feed";
function App() {
  return (
    <div className="body">
      <Hero />
      <div className="main container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/about" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
