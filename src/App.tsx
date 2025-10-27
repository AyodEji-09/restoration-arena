import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import GetInvolved from "./pages/GetInvolved";
import PastorsCorner from "./pages/PastorsCorner";
import Sermons from "./pages/Sermons";
import Giving from "./pages/Giving";
import Events from "./pages/Events";
import Error404 from "./pages/Error404";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Sermon from "./pages/Sermon";
import PastEvent from "./pages/PastEvent";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/pastors-corner" element={<PastorsCorner />} />
        <Route path="/sermons" element={<Sermons />} />
        <Route path="/sermons/:slug" element={<Sermon />} />
        <Route path="/giving" element={<Giving />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/past-event/:id" element={<PastEvent />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
