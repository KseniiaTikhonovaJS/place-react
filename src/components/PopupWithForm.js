import React from 'react';
import usePopupClose from '../hooks/usePopupClose';

function PopupWithForm({ isOpen, onClose, popupName, popupTitle, buttonName, children, onSubmit, buttonNameIsLoad }) {
  const popupVisibleClass = isOpen ? 'popup_is-opened' : '';
  usePopupClose(isOpen, onClose);
  return (
    <div className={`popup popup_type_${popupName} ${popupVisibleClass}`}>
      <div className="popup__container">
        <button
          className="popup__button-close"
          aria-label="Closing the edit window"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup__title">{popupTitle}</h2>
        <form className="popup__form" name="profile" onSubmit={onSubmit}>
          {children}
          <button type="submit" className="popup__button-save" aria-label="Save Changes">
            <h3 className="popup__button-title popup__button-visible">{buttonName}</h3>
            <h3 className="popup__button-title-load">{buttonNameIsLoad}</h3>
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;