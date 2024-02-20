// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react';
import useBoard from '../../providers/BoardProvider/BoardProvider.hook';
import useSearch from '../../providers/SearchProvider/SearchProvider.hook';
import { CiBookmarkPlus, CiCircleMinus } from 'react-icons/ci';
import './Card.css';
import Image from '../../models/Image';

interface CardProps {
  card: Image, 
  onClick: (card: Image) => void,
}

const Card: FC<CardProps> = ({ card, onClick }) => {
  const { saveCard, deleteCard } = useBoard();
  const { setSavedCard } = useSearch();

  const handleSave = (taregtCard: Image) => {
    saveCard(taregtCard);
    setSavedCard(taregtCard);
  };

  const handleDelete = (card: Image) => {
    deleteCard(card);
  }

  return (
    <>
    <div className="card__wrapper">
        <img className="card" src={card.src.original} alt={card.alt} key={card.index} onClick={() => onClick(card)} />
        {card.isSaved === true ? (
          <button className="card__button" onClick={() => handleDelete(card)}>
            <CiCircleMinus />
          </button>
        ) : (
          <button
            className= "card__button"
            onClick={() => handleSave(card)}>
            <CiBookmarkPlus />
          </button>
        )}
    </div>
    </>
  );
}
export default Card;
