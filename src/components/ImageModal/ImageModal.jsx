import React from 'react';
import PropTypes from 'prop-types';
import './ImageModal.module.css'

const ImageModal = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;

  const handleClose = (e) => {
    if (e.target.className.includes('image-modal-overlay')) {
      onClose();
    }
  };

  return (
    <div className="image-modal-overlay" onClick={handleClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="image-modal-close" onClick={onClose}>
          &times;
        </button>
        <img src={imageUrl} alt="Camper" className="image-modal-image" />
      </div>
    </div>
  );
};

ImageModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ImageModal;