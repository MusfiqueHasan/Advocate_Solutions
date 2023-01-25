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
// import NewsFeed from "../src/src/NewsFeed";
import UserLoginReg from "./pages/Auth/UserLoginReg";
import AdvocateLoginReg from "./pages/Auth/AdvocateLoginReg";
import Blogs from "./pages/Blogs/Blogs";
import Attorneys from "./pages/home/attorneys/Attorneys";
import ContactUs from "./Contact/ContactUs";
import UsefullLinks from "./pages/UsefullLinks/UsefullLinks";
import NewsFeed from "./pages/newsfeed/NewsFeed";
import ViewAllBlogs from "./pages/Blogs/ViewAllBlogs";
import ViewAllNews from "./pages/news/ViewAllNews";
import PrivateRoute from "./pages/Auth/PrivateRoute";
import Bidding from "./pages/bidding/Bidding";
import BiddingAmount from "./pages/bidding/BidComponents/BiddingAmount";
import BiddHistory from "./pages/bidding/BidComponents/BiddHistory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/news" element={<NewsFeed />} /> */}
          <Route path="/comunity" element={<NewsFeed />} />
          <Route path="/" element={<UserLoginReg />} />
          <Route path="/lawyerAuth" element={<AdvocateLoginReg />} />
        </Routes>
        <Header />
        <Routes>
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/consultation/details/:catId/:advName" element={<Details />} />
          <Route path="/advocates/:catId" element={<CategoryWiseAdvocate />} />

          {/* <Route path="/advocates/:catname" element={<CategoryWiseAdvocate />} /> */}
          <Route path="/attorney" element={<Attorneys />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* <Route path="/contact" element={<ContactUs />} /> */}

          <Route path="/news" element={<News />} />
          <Route path="/all_news" element={<ViewAllNews />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/all_blogs" element={<ViewAllBlogs />} />
          <Route path="/usefull_links" element={<UsefullLinks />} />
          <Route path="/bidding" element={<Bidding />} />
          <Route path="/bidding_amount" element={<BiddingAmount />} />
          <Route path="/bidding_history" element={<BiddHistory />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
