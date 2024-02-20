import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchPage from '../../pages/SearchPage/SearchPage';
import BoardPage from '../../pages/BoardPage/BoardPage';
import Root from '../../pages/RootPage/Root';
import SearchProvider from '../../providers/SearchProvider/SearchProvider';
import BoardProvider from '../../providers/BoardProvider/BoardProvider';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <SearchProvider>
        <BoardProvider>
          <Routes>
            <Route path="/" element={<Root />}>
              <Route index element={<SearchPage />} />
              <Route path="/search" element={<SearchPage />} />             
                <Route path="/myboard" element={<BoardPage />} />            
            </Route>
          </Routes>
          </BoardProvider>
        </SearchProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
