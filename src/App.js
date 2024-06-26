import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, AboutUs } from "./Pages/pages.js";
import { MyNavbar } from "./Components/components";

function App() {
  const test = "yes";
  return (
    <BrowserRouter>
      {test ? <MyNavbar /> : ""}
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/aboutus"} element={<AboutUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
