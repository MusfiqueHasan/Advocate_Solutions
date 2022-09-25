import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./pages/about/About";
import CaseStudy from "./pages/case-study/CaseStudy";
import Consultation from "./pages/consultation/Consultation";
import FAQ from "./pages/faq/FAQ";
import Home from "./pages/home/Home";
import News from "./pages/news/News";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/case_study" element={<CaseStudy />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
