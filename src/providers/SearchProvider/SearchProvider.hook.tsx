import { useContext } from 'react';
import SearchProviderContext from './SearchProvider.context';

const useSearch = () => {
  return useContext(SearchProviderContext);
};

export default useSearch;
