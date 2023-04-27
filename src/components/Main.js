import React from 'react';
import avatarEditButton from '../images/Vector.svg';
import api from '../utils/api';
import Card from './Card';

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  //states for user information and cards:
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState([]);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => console.log(err));
    api
      .getAllPlaces()
      .then((data) => {
        setCards(
          data.map((item) => ({
            likes: item.likes.length,
            id: item._id,
            src: item.link,
            alt: item.name,
            owner: item.owner,
            title: item.name,
          }))
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <main>
        <section className="profile">
          <div className="profile__info">
            <div className="profile__avatar">
              <img
                className="profile__avatar-photo"
                src={userAvatar}
                style={{ backgroundImage: `url(${userAvatar})` }}
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
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button"
                aria-label="Edit profile"
                type="button"
                onClick={onEditProfile}
              ></button>
              <p className="profile__job">{userDescription}</p>
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
            {cards.map(({ id, ...props }) => (
              <Card key={id} {...props} onCardClick={onCardClick} />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}

export default Main;
