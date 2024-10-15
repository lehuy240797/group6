import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import "../css/NavBar.css";

const NavBar = ({ cartItems }) => {
    const path = process.env.PUBLIC_URL;
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    const handleMenuItemClick = (path, event) => {
        if (location.pathname === path) {
            event.preventDefault();
            return;
        }
        setIsOpen(false);
    };

    const getTotalQuantity = () => {
        // Nếu cartItems chưa được truyền vào hoặc không có giá trị, đặt nó thành mảng rỗng []
        return (cartItems || []).reduce((total, item) => total + item.quantity, 0);
    };
    

    return (
        <nav className="navbar_menu">
            <button onClick={toggleMenu} className={`navbar_menu_toggle ${isOpen ? 'open' : ''}`}>
                {isOpen ? '\u2716' : '\u2630'}
            </button>

            <Link className="navbar_logo" to='/'  onClick={(e) => handleMenuItemClick('/', e)}>
                <img src={`${path}/assets/images/logo.webp`} alt="logo" />
            </Link>

            <ul className={`navbar_menu_items ${isOpen ? 'open' : ''}`}>
                <li><Link to='/' onClick={(e) => handleMenuItemClick('/', e)}>Home</Link></li>
                <li><Link to='/TCDMenu' onClick={(e) => handleMenuItemClick('/TCDMenu', e)}>The Cosmic Discoveries</Link></li>
                <li><Link to='/LD' onClick={(e) => handleMenuItemClick('/LD', e)}>Latest Developments</Link></li>
                <li><Link to='/Observatories' onClick={(e) => handleMenuItemClick('/Observatories', e)}>Observatories</Link></li>
                <li><Link to='/Library' onClick={(e) => handleMenuItemClick('/Library', e)}>Library</Link></li>
                <li><Link to='/Contact' onClick={(e) => handleMenuItemClick('/Contact', e)}>Contact</Link></li>
            </ul>

            <div className="cart">
                <Link to='/cart' onClick={(e) => handleMenuItemClick('/cart', e)}>
                    <i className="fas fa-shopping-cart"></i>
                    {getTotalQuantity() > 0 && (
                        <span className="cart-quantity">{getTotalQuantity()}</span>
                    )}
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
