import React from 'react';

function ImagePopup(cardProps) {
  const card = cardProps.card;
  const isVisible = card ? 'popup_is-opened' : '';
  return (
    <div className={`popup popup_type_image popup_overley_dark ${isVisible}`}>
      <div className="popup__container popup__container_type_image">
        <button
          className="popup__button-close"
          aria-label="Closing the edit window"
          type="button"
          onClick={cardProps.onClose}
        ></button>
        <img src={card ? card.src : ''} alt={card ? card.title : ''} className="popup__picture" />
        <h3 className="popup__picture-title">{card ? card.title : ''}</h3>
      </div>
    </div>
  );
}

export default ImagePopup;
