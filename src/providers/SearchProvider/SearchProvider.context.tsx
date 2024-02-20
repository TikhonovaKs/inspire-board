import { createContext } from 'react';
import Image from '../../models/Image';

interface ISearchProvider {
  getSearchCards: (keyword: string, currentBoardList: Image[]) => void;
  getRandomCards: (currentBoardList: Image[]) => void;
  keyWord: string;
  searchList: Image[];
  setSavedCard: (image: Image) => void;
  setKeyWord: (keyword: string) => void;
}
export default createContext<ISearchProvider>({
  getSearchCards: () => {},
  getRandomCards: () => {},
  keyWord: '',
  searchList: [],
  setSavedCard: () => {},
  setKeyWord: () => {},
});
