import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/about/About";
import CaseStudy from "./pages/case-study/CaseStudy";
import CategoryWiseAdvocate from "./pages/consultation/CategoryWiseAdvocate/CategoryWiseAdvocate";
import Consultation from "./pages/consultation/Consultation";
import FAQ from "./pages/faq/FAQ";
import Home from "./pages/home/Home";
import News from "./pages/news/News";

import LoginRegistration from './pages/Auth/LoginRegistration';
import LoginRegistrationLawyer from './pages/Auth/LoginRegistrationLawyer';
import Contactus from './pages/Contacts/Contactus';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginRegistration />} />
        <Route path="/lawyerAuth" element={<LoginRegistrationLawyer />} />
        <Route path="/signup" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/case_study" element={<CaseStudy />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/advocates/:catname" element={<CategoryWiseAdvocate />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
