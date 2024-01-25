
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {Login}  from "./screens/Loginscreen/Login";
import Home from "./screens/Homescreen/Home";
import {Signup}  from "./screens/Loginscreen/Signup";
import { Dashboard} from "./screens/Dashboard/Dashboard";
import { News } from "./screens/News/News";
import { Portfolio} from "./screens/Portfolio/Portfolio";
import { Analysis } from "./screens/Analysis/Analysis";
import { Aboutus } from "./screens/Aboutus/Aboutus";
import { Indices } from "./screens/Indices/Indices";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/news" element={<News />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/indices" element={<Indices />} />
        </Routes>
      </Router>
     
    </>
  );
}

export default App;
