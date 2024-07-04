import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, AboutUs, ContactUs } from "./Pages/pages.js";
import { MyNavbar, Footer } from "./Components/components";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/about-us"} element={<AboutUs />}></Route>
        <Route path={"/contact-us"} element={<ContactUs />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
