import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

// import Product from "./pages/Product";
// import Homepage from "./pages/Homepage";
// import Pricing from "./pages/Pricing";
// import Pagenotfound from "./pages/Pagenotfound";
// import Applayout from "./pages/Applayout";
// import Login from "./pages/Login";

// dist/assets/index-046b19b5.css   30.25 kB │ gzip:   5.06 kB
// dist/assets/index-fe6c7409.js   551.05 kB │ gzip: 160.94 kB

import Citylist from "./components/Citylist";
import Countrylist from "./components/Countrylist";
import City from "./components/City";
import Form from "./components/Form";
import SpinnerFullPage from "./components/SpinnerFullPage";

const Homepage = lazy(() => import("./pages/Homepage"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Pagenotfound = lazy(() => import("./pages/Pagenotfound"));
const Applayout = lazy(() => import("./pages/Applayout"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <Applayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<Citylist />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<Countrylist />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<Pagenotfound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
