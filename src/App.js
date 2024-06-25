import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, AboutUs } from "./Pages/pages.js";
import StickyNavbar from "./Components/MyNavbar";

function App() {
  return (
    <BrowserRouter>
      <StickyNavbar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/aboutus"} element={<AboutUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
