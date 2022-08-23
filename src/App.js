import "./App.css";
import Home from "./components/Home";
import Layout from "./components/Layout";
import FAQ from "./components/FAQ";
import Tour from "./components/Tour";
import TourDetail from "./components/TourDetail";
import TourList from "./components/TourList";
import { Routes, Route, Link, Outlet } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h2>這裡沒有東西</h2>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/tour" element={<Tour />}>
            <Route index element={<TourList />} />
            <Route path=":Id" element={<TourDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
