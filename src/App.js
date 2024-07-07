import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  AboutUs,
  ContactUs,
  Error,
  Bridal,
  Gallery,
  Accessories,
} from "./Pages/Pages.js";
import { MyNavbar, Footer } from "./Components/components";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/about-us"} element={<AboutUs />}></Route>
        <Route path={"/contact-us"} element={<ContactUs />}></Route>
        <Route path={"/bridal"} element={<Bridal />}></Route>
        <Route path={"/accessories"} element={<Accessories />}></Route>
        <Route path={"/Gallery"} element={<Gallery />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
