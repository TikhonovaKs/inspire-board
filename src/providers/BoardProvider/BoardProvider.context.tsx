import { createContext, ChangeEvent } from 'react';
import Image from '../../models/Image';

interface IBoardProvider {
  saveCard: (data: Image) => void;
  deleteCard: (data: Image) => void;
  handleLikes: () => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  boardList: Image[];
  likes: number;
  boardTitle: string;
}

export default createContext<IBoardProvider>({
  saveCard: () => {},
  deleteCard: () => {},
  handleLikes: () => {},
  onChangeTitle: () => {},
  boardList: [],
  likes: 0,
  boardTitle: '',
});
