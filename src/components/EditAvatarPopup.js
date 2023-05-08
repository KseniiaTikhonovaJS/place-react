import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  React.useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen]);

  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      popupName="popup_type_avatar"
      popupTitle="Update avatar"
      isOpen={isOpen}
      onClose={onClose}
      buttonName="Save"
      buttonNameIsLoad="Preservation..."
      onSubmit={handleSubmit}
    >
      <input
        id="input-link-avatar"
        type="url"
        name="link"
        placeholder="Link to avatar"
        className="popup__input popup__input_data_link"
        required
        ref={avatarRef}
      />
      <span id="input-link-avatar-error" className="error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
