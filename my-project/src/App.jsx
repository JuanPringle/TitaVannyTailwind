import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SubmitResume from "./SubmitResume";
import Service from "./Services"
import AboutUs from "./AboutUs";
import Contact from "./Contact";

export default function App() {
  return (
    <Router>
      <main className="relative bg-gray-950 p-0 m-0">
        <Header />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="submitResume" element={<SubmitResume/>}/>
            <Route path="services" element={<Service/>}/>
            <Route path="aboutUs" element={<AboutUs/>}/>
            <Route path="Contact" element={<Contact/>}/>
          </Routes>
        </div>
      </main>
    </Router>
  );
}