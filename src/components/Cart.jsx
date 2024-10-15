import React, { useState } from "react";
import "../css/Cart.css";

const Cart = ({ cartItems, setCart }) => {
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        notes: ""
    });

    const calculateTotals = () => {
        let totalQuantity = 0;
        let totalPrice = 0;
        cartItems.forEach(item => {
            totalQuantity += item.quantity;
            totalPrice += item.price * item.quantity;
        });
        return { totalQuantity, totalPrice };
    };

    const handleIncreaseQuantity = (itemToUpdate) => {
        setCart(cartItems.map(item =>
            item.id === itemToUpdate.id && item.type === itemToUpdate.type
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    };

    const handleDecreaseQuantity = (itemToUpdate) => {
        const item = cartItems.find(item => item.id === itemToUpdate.id && item.type === itemToUpdate.type);
        if (item.quantity > 1) {
            setCart(cartItems.map(item =>
                item.id === itemToUpdate.id && item.type === itemToUpdate.type
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ));
        } else {
            handleRemoveItem(itemToUpdate);
        }
    };

    const handleRemoveItem = (itemToRemove) => {
        setCart(cartItems.filter(item => !(item.id === itemToRemove.id && item.type === itemToRemove.type)));
    };

    const handleCheckout = () => {
        if (cartItems.length === 0) {
            alert("Your cart is empty. Please add some products before checking out.");
        } else {
            setShowCheckoutForm(true);
        }
    };

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccessModal(true);
        setCart([]);
        setShowCheckoutForm(false);
    };

    const { totalQuantity, totalPrice } = calculateTotals();

    return (
        <div className="cart-container">
            {!showCheckoutForm ? (
                <>
                    <h1>Your Cart</h1>
                    <ul>
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <li key={`${item.id}-${item.type}`}>
                                    <span className="cart-container-title">{item.title}</span>
                                    <div className="quantity-control">
                                        <button onClick={() => handleDecreaseQuantity(item)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => handleIncreaseQuantity(item)}>+</button>
                                    </div>
                                    <span>{item.type}</span>
                                    <span>{(item.price * item.quantity).toFixed(2)} USD</span>
                                    <button className="remove-button" onClick={() => handleRemoveItem(item)}>Remove</button>
                                </li>
                            ))
                        ) : (
                            <li>Your cart is empty.</li>
                        )}
                    </ul>
                    <h2>Total Quantity: {totalQuantity}</h2>
                    <h2>Total Price: {totalPrice.toFixed(2)} USD</h2>
                    <div className="checkout-button">
                        <button onClick={handleCheckout}>Checkout</button>
                    </div>
                </>
            ) : (
                <div className="checkout-form">
                    <h1>Shipping Information</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Name:
                            <input type="text" name="name" value={formData.name} onChange={handleFormChange} required />
                        </label>
                        <label>
                            Phone:
                            <input type="text" pattern="\d+" name="phone" value={formData.phone} onChange={handleFormChange} required />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" value={formData.email} onChange={handleFormChange} required />
                        </label>
                        <label>
                            Address:
                            <input type="text" name="address" value={formData.address} onChange={handleFormChange} required />
                        </label>
                        <label>
                            Notes:
                            <textarea name="notes" value={formData.notes} onChange={handleFormChange}></textarea>
                        </label>
                        <button type="submit">Confirm Order</button>
                    </form>
                </div>
            )}

            {showSuccessModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">Order Placed Successfully</div>
                        <div className="modal-body">Thank you! Your order has been placed successfully.</div>
                        <div className="modal-footer">
                            <button onClick={() => setShowSuccessModal(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
