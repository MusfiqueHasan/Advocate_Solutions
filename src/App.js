
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
import Profile from "./pages/profile/Profile";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App({ children }) {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/comunity"
            element={
              <PrivateRoute>
                <NewsFeed />
              </PrivateRoute>
            }
          />
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
          <Route
            path="/case-study"
            element={
              <PrivateRoute>
                <CaseStudy />
              </PrivateRoute>
            }
          />
          <Route
            path="/consultation"
            element={
              <PrivateRoute>
                <Consultation />
              </PrivateRoute>
            }
          />
          <Route
            path="/consultation/details/:catId/:advName"
            element={
              <PrivateRoute>
                <Details />
              </PrivateRoute>
            }
          />
          <Route
            path="/advocates/:catId"
            element={
              <PrivateRoute>
                <CategoryWiseAdvocate />
              </PrivateRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          <Route
            path="/attorney"
            element={
              <PrivateRoute>
                <Attorneys />
              </PrivateRoute>
            }
          />
          <Route path="/faq" element={<FAQ />} />
          <Route
            path="/contact"
            element={
              <PrivateRoute>
                <ContactUs />
              </PrivateRoute>
            }
          />

          <Route
            path="/news"
            element={
              <PrivateRoute>
                <News />
              </PrivateRoute>
            }
          />
          <Route
            path="/all_news"
            element={
              <PrivateRoute>
                <ViewAllNews />
              </PrivateRoute>
            }
          />
          <Route
            path="/blogs"
            element={
              <PrivateRoute>
                <Blogs />
              </PrivateRoute>
            }
          />
          <Route
            path="/all_blogs"
            element={
              <PrivateRoute>
                <ViewAllBlogs />
              </PrivateRoute>
            }
          />
          <Route
            path="/usefull_links"
            element={
              <PrivateRoute>
                <UsefullLinks />
              </PrivateRoute>
            }
          />
          <Route
            path="/bidding"
            element={
              <PrivateRoute>
                <Bidding />
              </PrivateRoute>
            }
          />
          <Route
            path="/bidding_amount"
            element={
              <PrivateRoute>
                <BiddingAmount />
              </PrivateRoute>
            }
          />
          <Route
            path="/bidding_history"
            element={
              <PrivateRoute>
                <BiddHistory />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
      <div>
        <ToastContainer autoClose={3000} position={"top-center"} />
        {children}
      </div>
    </>
  );
}

export default App;
