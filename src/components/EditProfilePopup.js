import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      popupName="popup_type_edit"
      popupTitle="Edit profile"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonName="Save"
      buttonNameIsLoad="Preservation..."
    >
      <input
        id="input-name"
        type="text"
        name="name"
        className="popup__input popup__input_data_name"
        required
        minLength="2"
        maxLength="40"
        placeholder="Name"
        value={name || ''}
        onChange={handleChangeName}
      />
      <span id="input-name-error" className="error"></span>
      <input
        id="input-job"
        type="text"
        name="job"
        className="popup__input popup__input_data_job"
        required
        minLength="2"
        maxLength="200"
        placeholder="About"
        value={description || ''}
        onChange={handleChangeDescription}
      />
      <span id="input-job-error" className="error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
