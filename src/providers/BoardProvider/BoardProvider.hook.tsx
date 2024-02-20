import { useContext } from 'react';
import BoardProviderContext from './BoardProvider.context';

const useBoard = () => {
  return useContext(BoardProviderContext);
};

export default useBoard;