import React, { FC } from 'react';
import { CiBookmarkPlus, CiCircleMinus, CiCircleRemove } from 'react-icons/ci';
import './PhotoPopup.css';
import useBoard from '../../providers/BoardProvider/BoardProvider.hook';
import Image from '../../models/Image';
import styles from './PhotoPopup.module.scss';

interface PhotoPopupProps {
  selectedCard: Image | null;
  onClose: () => void;
}

const PhotoPopup: FC<PhotoPopupProps> = ({ selectedCard, onClose }) => {
  const { saveCard, deleteCard } = useBoard();

  const handleSave = (card: Image | null) => {
    if (!card) {
      return;
    }
    saveCard(card);
    onClose();
  };

  const handleDelete = (card: Image) => {
    deleteCard(card);
    onClose();
  };

  const handleOnClose = (event: React.MouseEvent) => {
    if ((event.target as HTMLElement).id === 'container') onClose();
  };

  return (
    <div id="container" onClick={handleOnClose} className={styles.parent}>
      <div className={styles.container}>
        <img src={selectedCard?.src.original} alt={selectedCard?.alt} className={styles.img} />
        <div>
          {selectedCard?.isSaved === true ? (
            <button className={styles.buttonSave} onClick={() => handleDelete(selectedCard)}>
              <CiCircleMinus />
            </button>
          ) : (
            <button className={styles.buttonSave} onClick={() => handleSave(selectedCard)}>
              <CiBookmarkPlus />
            </button>
          )}
          </div>
          <button className={styles.buttonClose} onClick={onClose}><CiCircleRemove /></button>        
      </div>
    </div>
  );
};
export default PhotoPopup;
