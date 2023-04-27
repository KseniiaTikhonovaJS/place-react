import React from 'react';

function Card({ title, alt, src, likes, onCardClick }) {
  return (
    <li className="element" onClick={(_) => onCardClick({ title, alt, src, likes })}>
      <img className="element__image" alt={alt} src={src} />
      <button className="element__trash-button" aria-label="Deleting an element" type="button"></button>
      <div className="element__description">
        <h2 className="element__name">{title}</h2>
        <div className="element__like">
          <button className="element__like-button" aria-label="Selecting the item you like" type="button"></button>
          <h3 className="element__like-amount">{likes}</h3>
        </div>
      </div>
    </li>
  );
}

export default Card;
