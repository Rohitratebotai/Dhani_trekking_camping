import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
    const phoneNumber = "918433409385"; // replace with your number
    const message = "Hello, I would like to know more about Dhani Trekking Camping and your packages";

    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="whatsapp-container">
            <button className="whatsapp-btn" onClick={handleClick}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
                    alt="WhatsApp"
                    className="whatsapp-icon"
                />
            </button>
        </div>
    );
};

export default WhatsAppButton;