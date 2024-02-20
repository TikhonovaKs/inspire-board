import React, { useEffect, FC } from 'react';
import useSearch from '../../providers/SearchProvider/SearchProvider.hook';
import './SearchPage.css';
import Search from '../../components/Search/Search';
import CardList from '../../components/CardList/CardList';
import useBoard from '../../providers/BoardProvider/BoardProvider.hook';
import Image from '../../models/Image';


const SearchPage: FC = () => {
  const { getSearchCards, getRandomCards, searchList, keyWord } = useSearch();
  const { boardList }: {boardList: Image[]} = useBoard();

  useEffect(() => {
    if (keyWord) {
      getSearchCards(keyWord, boardList);
    } else {
      getRandomCards(boardList);
    }
  }, [keyWord, boardList]);

  return (
    <div className="searchPage">
      <Search />
      <CardList cardsList={searchList} />
    </div>
  );
}

export default SearchPage;
