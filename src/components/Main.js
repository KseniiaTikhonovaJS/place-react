import React from 'react';
import avatarEditButton from '../images/Vector.svg';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
  onCardDelete,
  onCardLike,
  onCardDislike,
  cards,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <div className="profile__avatar">
            <img
              className="profile__avatar-photo"
              src={currentUser.avatar}
              alt="User profile photo"
            />
            <img
              className="profile__avatar-edit"
              src={avatarEditButton}
              alt="Avatar edit icon"
              onClick={onEditAvatar}
            />
          </div>
          <div className="profile__description">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              aria-label="Edit profile"
              type="button"
              onClick={onEditProfile}
            ></button>
            <p className="profile__job">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          aria-label="Adding content to your profile"
          type="button"
          onClick={onAddPlace}
        ></button>
      </section>
      <div className="place-container">
        <ul className="elements">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardDelete={onCardDelete}
              onCardLike={onCardLike}
              onCardDislike={onCardDislike}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Main;
