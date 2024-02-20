import React, { FC } from 'react';
import { CiBookmarkPlus, CiCircleMinus } from 'react-icons/ci';
import './PhotoPopup.css';
import useBoard from '../../providers/BoardProvider/BoardProvider.hook';
import Image from '../../models/Image';

interface PhotoPopupProps {
  selectedCard: Image | null;
  onClose: () => void;
}

const PhotoPopup: FC<PhotoPopupProps> = ({ selectedCard, onClose }) => {
  const { saveCard, deleteCard } = useBoard();

  const handleSave = (card: Image | null) => {
    if(!card) {
      return;
    }
    saveCard(card);
    onClose();
  };

  const handleDelete = (card: Image) => {
    deleteCard(card);
    onClose();
  };

  return (
    <div className="popup popup_overley_dark">
      <div className="popup__container">
        <img src={selectedCard?.src.original} alt={selectedCard?.alt} className="popup__image" />
        <div className="popup__buttonsContainer">
          {selectedCard?.isSaved === true ? (
            <button className="popup__button" onClick={() => handleDelete(selectedCard)}>
              <CiCircleMinus />
            </button>
          ) : (
            <button className="popup__button" onClick={() => handleSave(selectedCard)}>
              <CiBookmarkPlus />
            </button>
          )}
          <button className="popup__closeButton" onClick={onClose}></button>
        </div>
      </div>
    </div>
  );
};
export default PhotoPopup;
