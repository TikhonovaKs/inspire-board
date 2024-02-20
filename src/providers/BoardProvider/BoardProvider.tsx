import { useState, useEffect, ChangeEvent, FC, ReactNode } from 'react';
import BoardProviderContext from './BoardProvider.context';
import Image from '../../models/Image';

const BoardProvider: FC<{children: ReactNode}> = ({ children }) => {
  // const [boardList, setBoardList] = useState<Image[]>(JSON.parse(localStorage.getItem('savedList') || '') || []);
  // const [likes, setLikes] = useState<number>(JSON.parse(localStorage.getItem('boardLikes') || '') || 0);
  // const [boardTitle, setBoardTitle] = useState<string>(JSON.parse(localStorage.getItem('boardTitle') || '') || '');

  const [boardList, setBoardList] = useState<Image[]>([]);
  const [likes, setLikes] = useState<number>(0);
  const [boardTitle, setBoardTitle] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('savedList', JSON.stringify(boardList));
    localStorage.setItem('boardLikes', JSON.stringify(likes));
    localStorage.setItem('boardTitle', JSON.stringify(boardTitle));
  }, [boardList, likes, boardTitle]);

  const saveCard = (data: Image) => {
    const newCard = {
      id: data.id,
      src: data.src,
      alt: data.alt,
      isSaved: true,
    };
    setBoardList((prevList: Image[]) => [...prevList, newCard]);
  };

  const deleteCard = (data: Image) => {
  const updList = boardList.filter((card: Image) => card.src !== data.src);
  setBoardList(updList);
  }

  const handleLikes = () => {
    setLikes(likes + 1);
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setBoardTitle(e.target.value);
  };

  const value = {
    saveCard,
    deleteCard,
    handleLikes,
    onChangeTitle,
    boardList,
    likes,
    boardTitle,
  };

  return <BoardProviderContext.Provider value={value}>{children}</BoardProviderContext.Provider>;
};

export default BoardProvider;
