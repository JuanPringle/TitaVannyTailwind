import Header from "./Components/Header";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SubmitResume from "./Pages/SubmitResume";
import Service from "./Pages/Services"
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import JobSearch from "./Pages/JobSearch";
import Bottom from "./Components/Bottom";

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
            <Route path="contact" element={<Contact/>}/>
            <Route path="jobSearch" element={<JobSearch/>}/>
          </Routes>
        </div>
        <Bottom />

      </main>
    </Router>
  );
}