import style from './App.module.scss';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import Books from './containers/Books/Books';
import { useState } from 'react';
import { NavLink, BrowserRouter, Route, Routes } from 'react-router-dom';
import BookModal from './components/BookModal/BookModal';

function App() {
    const [query, setQuery] = useState(['', 10, '']);
    const onSearch = (input, number, index) => {
        setQuery([input, number, index]);
    };

    return (
        <div className={style.All}>
            <BrowserRouter>
                <div className={style.Background}></div>
                <Header />
                <SearchForm onSearch={onSearch} />
                <Routes>
                    <Route path='/' element={''} />
                    <Route path='/books/' element={<Books query={query} />} />
                    <Route path='/books/:id' element={<BookModal />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
