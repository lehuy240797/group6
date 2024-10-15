import { HashRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import TCDMenu from "./components/TCD_Menu";
import BigBang from "./components/BigBang";
import EoE from "./components/EoE";
import Planets from "./components/Planets";
import Constellation from "./components/Constellations";
import Comets from "./components/Comets";
import LD from "./components/LD";
import Observatories from "./components/Observatories";
import Contact from "./components/Contact";
import Library from "./components/Library";
import Images from "./components/Images";
import Videos from "./components/Videos";
import Books from "./components/Books";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Background from "./components/Background";
import Ticker from "./components/Ticker"; // Import Ticker
import VisitorCount from "./components/VisitorCount"; // Import VisitorCount

const App = () => {
    const [cart, setCart] = useState([]); // Quản lý giỏ hàng

    return (
        <>
            <Background />
            <NavBar cartItems={cart} />
            <VisitorCount /> {/* Thêm VisitorCount */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/TCDMenu" element={<TCDMenu />} />
                <Route path="/BigBang" element={<BigBang />} />
                <Route path="/EoE" element={<EoE />} />
                <Route path="/Planets" element={<Planets />} />
                <Route path="/Constellation" element={<Constellation />} />
                <Route path="/Comets" element={<Comets />} />
                <Route path="/LD" element={<LD />} />
                <Route path="/Observatories" element={<Observatories />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/library" element={<Library setCart={setCart} />} />
                <Route path="/Images" element={<Images />} />
                <Route path="/Videos" element={<Videos />} />
                <Route path="/books" element={<Books setCart={setCart} />} />
                <Route path="/cart" element={<Cart cartItems={cart} setCart={setCart} />} />
            </Routes>
            <Ticker />
            <Footer />
        </>
    );
};

const RootApp = () => {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    );
};

export default RootApp;
