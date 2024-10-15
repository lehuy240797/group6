import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Books.css";

const Books = ({ setCart }) => {
    const path = process.env.PUBLIC_URL;
    const books = [
        { id: 1, title: "Inside The Universe", img: `${path}/assets/images/Books/book1.jpg`, priceBuy: 15.83, priceBorrow: 5.00 },
        { id: 2, title: "The Night Sky Month by Month", img: `${path}/assets/images/Books/book2.jpg`, priceBuy: 9.54, priceBorrow: 3.00 },
        { id: 3, title: "The Ultimate Guide To Astrology", img: `${path}/assets/images/Books/book3.jpg`, priceBuy: 19.25, priceBorrow: 7.00 },
        { id: 4, title: "An Adventure Guide To Outer Space", img: `${path}/assets/images/Books/book4.jpg`, priceBuy: 14.13, priceBorrow: 4.00 },
        { id: 5, title: "Cosmos by Carl Sagan", img: `${path}/assets/images/Books/book5.jpg`, priceBuy: 18.99, priceBorrow: 6.00 },
        { id: 6, title: "The Universe in a Nutshell by Stephen Hawking ", img: `${path}/assets/images/Books/book6.jpg`, priceBuy: 11.99, priceBorrow: 3.50 },
        { id: 7, title: "The Black Hole War  ", img: `${path}/assets/images/Books/book7.jpg`, priceBuy: 19.99, priceBorrow: 6.50 },
        { id: 8, title: "Astrophysics for Young People in a Hurry ", img: `${path}/assets/images/Books/book8.jpg`, priceBuy: 11.95, priceBorrow: 3.50 },
        { id: 9, title: "Parallel Worlds", img: `${path}/assets/images/Books/book9.jpg`, priceBuy: 20.00, priceBorrow: 7.00 },
        { id: 10, title: "A Brief History of Time ", img: `${path}/assets/images/Books/book10.jpg`, priceBuy: 18.00, priceBorrow: 6.00 },
        { id: 11, title: "George's Secret Key to the Universe", img: `${path}/assets/images/Books/book11.jpg`, priceBuy: 12.99, priceBorrow: 3.50 },
        { id: 12, title: "The Elegant Universe", img: `${path}/assets/images/Books/book12.jpg`, priceBuy: 19.99, priceBorrow: 6.50 },
        { id: 13, title: "The God Equation", img: `${path}/assets/images/Books/book13.jpg`, priceBuy: 18.00, priceBorrow: 6.00 },
        { id: 14, title: "The Future of Humanity: Our Destiny in the Universe", img: `${path}/assets/images/Books/book14.jpg`, priceBuy: 18.00, priceBorrow: 6.00 },
        { id: 15, title: "The Universe from Nothing", img: `${path}/assets/images/Books/book15.jpg`, priceBuy: 17.99, priceBorrow: 5.99 },
        { id: 16, title: "Before The Big Bang: The Origin of the Universe and What Lies Beyond", img: `${path}/assets/images/Books/book16.jpg`, priceBuy: 27.99, priceBorrow: 10.99 },
        { id: 17, title: "God's Equation: Einstein, Relativity, and the Expanding Universe", img: `${path}/assets/images/Books/book17.jpg`, priceBuy: 14.96, priceBorrow: 4.99 },
        { id: 18, title: "The Science of the Earth: The Secrets of Our Planet Revealed", img: `${path}/assets/images/Books/book18.jpg`, priceBuy: 50.00, priceBorrow: 15.00 },
        { id: 19, title: "Gravity's Fatal Attraction: Black Holes in the Universe", img: `${path}/assets/images/Books/book19.jpg`, priceBuy: 36.99, priceBorrow: 12.99 },
        { id: 20, title: "The End of Astronauts: Why Robots Are the Future of Exploration", img: `${path}/assets/images/Books/book20.jpg`, priceBuy: 25.95, priceBorrow: 9.95 }
    ];

    const [selectedTypes, setSelectedTypes] = useState({});
    const [showNotification, setShowNotification] = useState(false);

    const handleTypeChange = (bookId, type) => {
        setSelectedTypes(prevSelectedTypes => ({
            ...prevSelectedTypes,
            [bookId]: type
        }));
    };

    const addToCart = (book) => {
        const selectedType = selectedTypes[book.id] || "Buy";
        const price = selectedType === "Buy" ? book.priceBuy : book.priceBorrow;

        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(item => item.id === book.id && item.type === selectedType);
            if (existingItemIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity += 1;
                return updatedCart;
            } else {
                return [...prevCart, { ...book, type: selectedType, price, quantity: 1 }];
            }
        });

        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 2000);
    };

    return (
        <>
            {showNotification && <div className="cart-notification">Item added to cart!</div>}

            <div className="Raw">
                <h1>List of Books</h1>
            </div>
            <div className="books-container">
                {books.map((book) => (
                    <div key={book.id} className="book-item">
                        <img src={book.img} alt={book.title} />
                        <h3>{book.title}</h3>
                        <p>Buy Price: {book.priceBuy.toFixed(2)} USD</p>
                        <p>Borrow Price: {book.priceBorrow.toFixed(2)} USD</p>
                        <div className="book-actions">
                            <select
                                value={selectedTypes[book.id] || "Buy"}
                                onChange={(e) => handleTypeChange(book.id, e.target.value)}
                            >
                                <option value="Buy">Buy</option>
                                <option value="Borrow">Borrow</option>
                            </select>
                            <button onClick={() => addToCart(book)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-link">
                <Link to="/cart">
                    <button>Go to Cart</button>
                </Link>
            </div>
        </>
    );
};

export default Books;
