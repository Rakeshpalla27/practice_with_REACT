import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Pagenotfound from "./pages/Pagenotfound";
import Applayout from "./pages/Applayout";
import Login from "./pages/Login";
import Citylist from "./components/Citylist";
import Countrylist from "./components/Countrylist";
import City from "./components/City";
import Form from "./components/Form";

const url = "http://localhost:8000";

function App() {
  const [cities, setcities] = useState([]);
  const [isloading, setisloading] = useState(false);

  useEffect(function () {
    try {
      setisloading(true);
      fetch(`${url}/cities`)
        .then((res) => res.json())
        .then((data) => setcities(data));
    } catch {
      alert("something went wrong while fetching data");
    } finally {
      setisloading(false);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<Applayout />}>
          <Route
            index
            element={<Citylist cities={cities} isloading={isloading} />}
          />
          <Route
            path="cities"
            element={<Citylist cities={cities} isloading={isloading} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="countries"
            element={<Countrylist cities={cities} isloading={isloading} />}
          />
          <Route path="form" element={<Form />} />
        </Route>
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
