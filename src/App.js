import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/about/About";
import CaseStudy from "./pages/case-study/CaseStudy";
import CategoryWiseAdvocate from "./pages/consultation/CategoryWiseAdvocate/CategoryWiseAdvocate";
import Details from "./pages/consultation/CategoryWiseAdvocate/Details";
import Consultation from "./pages/consultation/Consultation";
import FAQ from "./pages/faq/FAQ";
import Footer from "./pages/home/footer/Footer";
import Header from "./pages/home/header/Header";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import UserLoginReg from "./pages/Auth/UserLoginReg";
import AdvocateLoginReg from "./pages/Auth/AdvocateLoginReg";
import Blogs from "./pages/Blogs/Blogs";
import Attorneys from "./pages/home/attorneys/Attorneys";
import Contact from './Contact/Contact';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLoginReg />} />
          <Route path="/lawyerAuth" element={<AdvocateLoginReg />} />
        </Routes>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/consultation/details" element={<Details />} />
          <Route path="/advocates" element={<CategoryWiseAdvocate />} />
          {/* <Route path="/advocates/:catname" element={<CategoryWiseAdvocate />} /> */}
          <Route path="/attorney" element={<Attorneys />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
