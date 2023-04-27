import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Card from './Card';
import React from 'react';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  function handleCardClick(curentCard) {
    setSelectedCard(curentCard);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(null);
    setIsAddPlacePopupOpen(null);
    setIsEditAvatarPopupOpen(null);
    setSelectedCard(null);
  }

  return (
    <div className="App">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <PopupWithForm
        popupName="popup_type_edit"
        popupTitle="Edit profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
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
        />
        <span id="input-job-error" className="error"></span>
      </PopupWithForm>
      <PopupWithForm
        popupName="popup_type_card"
        popupTitle="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonName="Create"
        buttonNameIsLoad="Creation..."
      >
        <input
          id="input-place"
          minLength="2"
          maxLength="30"
          type="text"
          name="place"
          placeholder="Place name"
          className="popup__input popup__input_data_place"
          required
        />
        <span id="input-place-error" className="error"></span>
        <input
          id="input-link-card"
          type="url"
          name="link"
          placeholder="Link to picture"
          className="popup__input popup__input_data_link"
          required
        />
        <span id="input-link-card-error" className="error"></span>
      </PopupWithForm>
      <PopupWithForm popupName="popup_type_deleteCard" popupTitle="Вы уверены?" buttonName="Да"></PopupWithForm>
      <PopupWithForm
        popupName="popup_type_avatar"
        popupTitle="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonName="Save"
        buttonNameIsLoad="Preservation..."
      >
        <input
          id="input-link-avatar"
          type="url"
          name="link"
          placeholder="Link to avatar"
          className="popup__input popup__input_data_link"
          required
        />
        <span id="input-link-avatar-error" className="error"></span>
      </PopupWithForm>
      <Card />
      <ul className="elements"></ul>
    </div>
  );
}

export default App;
