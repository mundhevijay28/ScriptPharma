import React, { useState } from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './Modal.css';

function Modal({ service, onClose }) {
  const [showContactOptions, setShowContactOptions] = useState(false);

  const handleContactClick = () => {
    setShowContactOptions(true);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('service-details-modal')) {
      onClose();
    }
  };

  return (
    <div className="service-details-modal" onClick={handleOutsideClick}>
      <div className="service-details-container">
        {/* Close button */}
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>

        {/* Image */}
        <img src={service.image} alt={service.title} className="service-detail-img" />

        {/* Additional Info */}
        <div className="modal-additional-info">{service.additionalInfo}</div>

        {/* Price */}
        <p className="modal-price">
          <strong>Price:</strong> {service.price}
        </p>

        {/* Note */}
        <p className="modal-note">
          <strong>Note: The price is negotiable based on the complexity and scope of your work. Please discuss your requirements with us.</strong> {service.note}
        </p>

        {/* Contact Options */}
        {!showContactOptions ? (
          <button className="get-contact-btn" onClick={handleContactClick}>
            Contact Us
          </button>
        ) : (
          <div className="contact-options">
            <button
              className="contact-option-btn email-btn"
              onClick={() => window.location.href = `mailto:${service.contactInfo}`}
            >
              <FaEnvelope size={20} /> Contact by Email
            </button>
            <button
              className="contact-option-btn whatsapp-btn"
              onClick={() => window.location.href = `https://wa.me/917499875082`}
            >
              <FaWhatsapp size={20} /> Contact via WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
