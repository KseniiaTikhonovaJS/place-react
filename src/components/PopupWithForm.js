import React from 'react';

function PopupWithForm(props) {
  const popupVisibleClass = props.isOpen ? 'popup_is-opened' : '';

  return (
    <div className={`popup popup_type_${props.popupName} ${popupVisibleClass}`}>
      <div className="popup__container">
        <button
          className="popup__button-close"
          aria-label="Closing the edit window"
          type="button"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.popupTitle}</h2>
        <form className="popup__form" name="profile" noValidate>
          {props.children}
          <button type="submit" className="popup__button-save" aria-label="Save Changes">
            <h3 className="popup__button-title popup__button-visible">{props.buttonName}</h3>
            <h3 className="popup__button-title-load">{props.buttonNameIsLoad}</h3>
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
