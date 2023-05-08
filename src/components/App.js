import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import React from 'react';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));
    api
      .getAllPlaces()
      .then((data) => {
        setCards(
          data.map((item) => ({
            likes: item.likes,
            _id: item._id,
            src: item.link,
            alt: item.name,
            owner: item.owner,
            title: item.name,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

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
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardDelete(cardId) {
    api
      .deletePlace(cardId)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== cardId));
      })
      .catch((err) => console.log(err));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .likeCard(card._id, !isLiked)
      .then((newCard) => {
        const newCardItem = {
          likes: newCard.likes,
          _id: newCard._id,
          src: newCard.link,
          alt: newCard.name,
          owner: newCard.owner,
          title: newCard.name,
        };
        setCards((state) => state.map((c) => (c._id === card._id ? newCardItem : c)));
      })
      .catch((err) => console.log(err));
  }

  function handleCardDisLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .disLikeCard(card._id, isLiked)
      .then((newCard) => {
        const newCardItem = {
          likes: newCard.likes,
          _id: newCard._id,
          src: newCard.link,
          alt: newCard.name,
          owner: newCard.owner,
          title: newCard.name,
        };
        setCards((state) => state.map((c) => (c._id === card._id ? newCardItem : c)));
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateUser(userData) {
    api
      .editProfileInfo(userData)
      .then((userResponse) => {
        setCurrentUser(userResponse);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar({ avatar }) {
    api
      .changeAvatar(avatar)
      .then((linkResponse) => {
        setCurrentUser(linkResponse);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlace(place) {
    api
      .addPlace(place)
      .then((newCard) => {
        const newCardItem = {
          likes: newCard.likes,
          _id: newCard._id,
          src: newCard.link,
          alt: newCard.name,
          owner: newCard.owner,
          title: newCard.name,
        };
        setCards([newCardItem, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardDelete={handleCardDelete}
          onCardLike={handleCardLike}
          onCardDislike={handleCardDisLike}
          cards={cards}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlace} />
        <PopupWithForm popupName="popup_type_deleteCard" popupTitle="Вы уверены?" buttonName="Да"></PopupWithForm>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;