import React from "react";
import { CartProvider } from "./Component/CartContext.jsx";
import { Outlet } from "react-router-dom";
import Head from "./Component/Head.jsx"
function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Head/>
        <Outlet />
      </div>
    </CartProvider>
  );
}

export default App;
