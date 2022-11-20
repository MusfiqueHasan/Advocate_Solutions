import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./pages/about/About";
import CaseStudy from "./pages/case-study/CaseStudy";
import CategoryWiseAdvocate from "./pages/consultation/CategoryWiseAdvocate/CategoryWiseAdvocate";
import Consultation from "./pages/consultation/Consultation";
import FAQ from "./pages/faq/FAQ";
import Footer from "./pages/home/footer/Footer";
import Header from "./pages/home/header/Header";
import Home from "./pages/home/Home";
import News from "./pages/news/News";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/advocates" element={<CategoryWiseAdvocate />} />
          {/* <Route path="/advocates/:catname" element={<CategoryWiseAdvocate />} /> */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
