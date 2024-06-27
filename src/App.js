import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, AboutUs } from "./Pages/pages.js";
import { MyNavbar, Footer } from "./Components/components";

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/aboutus"} element={<AboutUs />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
