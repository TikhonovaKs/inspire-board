import { useState, FC, ReactNode } from 'react';
import SearchProviderContext from './SearchProvider.context';
import photoApi from '../../utils/PhotoApi';
import Image from '../../models/Image';


const SearchProvider: FC<{children: ReactNode}> = ({ children }) => {


  const [keyWord, setKeyWord] = useState('');
  const [searchList, setSearchList] = useState<Image[]>([]);

  const saveSearchListToLocalStorage = (list: Image[]) => {
    localStorage.setItem('searchList', JSON.stringify(list));
  };

  
  const getRandomCards = (currentBoardList: Image[]) => {
    photoApi
    .fetchStartPhotos()
    .then((data) => {
      const photos = data.photos;
      const updatedList = photos.map((item: Image) => ({
        id: item.id,
        src: item.src,
        alt: item.alt,
        isSaved: currentBoardList && currentBoardList.some((boardItem) => boardItem.id === item.id) ? true : false,
      }));
      setSearchList(updatedList);
      saveSearchListToLocalStorage(updatedList);
    });
  };

  const getSearchCards = (keyword: string, currentBoardList: Image[]) => {
    if (!keyword) {
      return;
    }
    photoApi
    .searchPhoto(keyword)
    .then((data) => {
      const photos = data.photos;
      const updatedList = photos.map((item: Image) => ({
        id: item.id,
        src: item.src,
        alt: item.alt,
        isSaved: currentBoardList && currentBoardList.some((boardItem) => boardItem.id === item.id) ? true : false,
      }));
      setSearchList(updatedList);
      saveSearchListToLocalStorage(updatedList);
    })
  };

  const setSavedCard = (targetCard: Image) => {
    const updSearchList: Image[] = searchList.map((srchCard: Image) => {
      if (targetCard.id === srchCard.id) {
        return {
          ...srchCard,
          isSaved: true,
        };
      }
      return srchCard;
    });
    setSearchList(updSearchList);
  };

  const value = {
    keyWord,
    getRandomCards,
    getSearchCards,
    searchList,
    setSavedCard,
    setKeyWord,
  };

  return <SearchProviderContext.Provider value={value}>
      {children}
    </SearchProviderContext.Provider>;
};

export default SearchProvider;
