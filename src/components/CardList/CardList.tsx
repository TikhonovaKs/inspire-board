import React, { useState, FC } from 'react';
import useResize from '../../hooks/useResize';
import Card from '../Card/Card';
import PhotoPopup from '../PhotoPopup/PhotoPopup';
import Image from '../../models/Image';
import styles from './CardList.module.scss';

interface CardListProps {
  cardsList: Image[],
}

const CardList: FC<CardListProps> = ({ cardsList }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Image | null>(null);

  const { isScreenXl, isScreenMd, isScreenSm } = useResize();
  const visibleCardsMap = {
    isScreenXl: 16,
    isScreenMd: 8,
    isScreenSm: 5,
  };
  const [visibleCardsFromList, setVisibleCardsFromList] = useState(
    visibleCardsMap[isScreenXl ? 'isScreenXl' : isScreenMd ? 'isScreenMd' : 'isScreenSm']
  );
  const showMoreCards = () => {
    if (isScreenXl) {
      setVisibleCardsFromList((prevValue) => prevValue + 16);
    } else if (isScreenMd) {
      setVisibleCardsFromList((prevValue) => prevValue + 8);
    } else if (isScreenSm) {
      setVisibleCardsFromList((prevValue) => prevValue + 5);
    } else {
      setVisibleCardsFromList((prevValue) => prevValue + 16);
    }
  };
  // remove visible of more button
  const isButtonHidden = visibleCardsFromList >= cardsList.length;

  const onCardClick = (item: Image | null) => { 
    setSelectedCard(item);
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
    setSelectedCard(null); // Reset selectedCard when closing the popup
  };

  const cards = cardsList
    .slice(0, visibleCardsFromList)
    .map((item, index) => (
      <Card key={index} card={item} onClick={() => onCardClick(item)} />
      //layoutStyle="card card__layout1"
    ));

  return (
    <>
      <section className={styles.parent}>
        <ul className={styles.list}>{cards}</ul>
        <button
          className={`${styles.more_button} ${isButtonHidden ? styles.more_button_hidden : ''}`}
          aria-label=""
          type="button"
          onClick={showMoreCards}
        >
          More
        </button>
      </section>
      {popupVisible && (
        <PhotoPopup
          selectedCard={selectedCard}
          onClose={closePopup}
        />
      )}
    </>
  );
}
export default CardList;
