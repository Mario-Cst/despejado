import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Workers from "./components/Pages/Workers";
import Sidebar from "./components/Sidebar/sidebar";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" exact={true} element={<Home />} />
              <Route path="/services" exact={true} element={<Services />} />
              <Route path="/workers" exact={true} element={<Workers />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
