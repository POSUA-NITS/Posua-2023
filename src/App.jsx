import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Navbar } from "./Components";
import Home from "./Pages/Home/Home";
import Error from "./Pages/Error/Error";
import Events from "./Pages/Events/Events";
import Gallery from "./Pages/Gallery/Gallery";
import Teams from "./Pages/Teams/Teams";
import Artists from "./Pages/Artists/Artists";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Sponsors from "./Pages/Sponsors/Sponsors";
import { Suspense } from "react";
import Loader from "./Components/Loader/Loader";
import { useState } from "react";
import Scrolling from "./Pages/Artists/Scrolling";
import { useLocation } from "react-router-dom";
const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [delay, setDelay] = useState(false);

  setTimeout(() => {
    setDelay(true);
  }, 1000);

  

  return (
    <BrowserRouter>
      {!isLoaded ? <Loader setIsLoaded={setIsLoaded} /> : null}
      {delay?<>
        <Navbar setIsLoaded={setIsLoaded} />
        <Scrolling>
          <Routes>
            <Route path="/" element={<Home isLoaded={isLoaded} />} />
            <Route path="/events" element={<Events />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <ScrollToTop />
          <Footer />
        </Scrolling>
      </>:''}
    </BrowserRouter>
  );
};

export default App;
