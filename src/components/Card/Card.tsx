// eslint-disable-next-line no-unused-vars
import React, { FC } from 'react';
import useBoard from '../../providers/BoardProvider/BoardProvider.hook';
import useSearch from '../../providers/SearchProvider/SearchProvider.hook';
import { CiBookmarkPlus, CiCircleMinus } from 'react-icons/ci';
import Image from '../../models/Image';
import styles from './Card.module.scss';

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
    <div className={styles.parent}>
        <img className={styles.image} src={card.src.original} alt={card.alt} key={card.index} onClick={() => onClick(card)} />
        {card.isSaved === true ? (
          <button className={styles.button} onClick={() => handleDelete(card)}>
            <CiCircleMinus />
          </button>
        ) : (
          <button
            className={styles.button}
            onClick={() => handleSave(card)}>
            <CiBookmarkPlus />
          </button>
        )}
    </div>
    </>
  );
}
export default Card;
