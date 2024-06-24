import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About } from "./Pages/pages.js";
import StickyNavbar from "./Components/MyNavbar";

function App() {
  return (
    <BrowserRouter>
      <StickyNavbar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/aboutus"} element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
