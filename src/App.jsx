import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Navbar } from "./Components";
import { Home } from "./Pages";
import Error from "./Pages/Error/Error";
import Events from "./Pages/Events/Events";
import Gallery from "./Pages/Gallery/Gallery";
import Teams from "./Pages/Teams/Teams";
import Artists from "./Pages/Artists/Artists";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
