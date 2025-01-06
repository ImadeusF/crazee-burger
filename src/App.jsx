import { useState } from "react";
import { Route, Routes } from "react-router";
import LoginPage from "./components/pages/login/LoginPage.jsx";
import OrderPage from "./components/pages/order/OrderPage.jsx";
import ErrorPage from "./components/pages/error/ErrorPage.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order/:username" element={<OrderPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
