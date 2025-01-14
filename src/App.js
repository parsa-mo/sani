import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  AboutUs,
  ContactUs,
  Error,
  Bridal,
  Gallery,
  Accessories,
  BridalFolderPage,
  Shapewear,
  ShapewearProductPage,
} from "./Pages/Pages.js";
import { MyNavbar, Footer } from "./Components/components";
import React, { createContext, useState, useEffect, useContext } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "./Firebase";

const FirebaseDataContext = createContext();

export const FirebaseDataProvider = ({ children }) => {
  const [firebaseData, setFirebaseData] = useState(null);

  useEffect(() => {
    // Reference to the "Products" path in your database
    const dbRef = ref(database, "Products");

    // Listen for real-time updates
    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        const data = snapshot.val();
        setFirebaseData(data); // Update state with fetched data
      },
      (error) => {
        console.error("Firebase Error:", error); // Log any errors
      },
    );

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  return (
    <FirebaseDataContext.Provider value={firebaseData}>
      {children}
    </FirebaseDataContext.Provider>
  );
};

// Custom hook for accessing Firebase data
export const useFirebaseData = () => {
  return useContext(FirebaseDataContext);
};

function App() {
  return (
    <FirebaseDataProvider>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/about-us"} element={<AboutUs />}></Route>
          <Route path={"/shapewear"} element={<Shapewear />}></Route>
          <Route
            path={"/shapewear/:foldername"}
            element={<ShapewearProductPage />}
          ></Route>
          <Route path={"/contact-us"} element={<ContactUs />}></Route>
          <Route path={"/bridal"} element={<Bridal />}></Route>
          <Route path="/bridal/:foldername" element={<BridalFolderPage />} />
          <Route path={"/accessories"} element={<Accessories />}></Route>
          <Route path={"/Gallery"} element={<Gallery />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </FirebaseDataProvider>
  );
}

export default App;
