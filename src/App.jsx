import style from './App.module.scss';
import Header from './components/Header/Header';
import SearchForm from './components/SearchForm/SearchForm';
import Books from './containers/Books/Books';
import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import BookModal from './components/BookModal/BookModal';

function App() {
    const [query, setQuery] = useState({ input: '', number: 10 });
    const onSearch = (input, number) => {
        setQuery({ input, number });
    };

    return (
        <div className={style.All}>
            <HashRouter>
                {/* <div className={style.Background}></div> */}
                <Routes>
                    <Route
                        path='/'
                        element={
                            <div className={style.Wrap}>
                                <div className={style.Box}>
                                    <Header />
                                    <SearchForm onSearch={onSearch} />
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path='/books/'
                        element={
                            <>
                                <div className={style.Background}>
                                    <Header />
                                    <SearchForm onSearch={onSearch} />
                                </div>
                                <Books query={query} />
                            </>
                        }
                    />
                    <Route
                        path='/books/:id'
                        element={
                            <>
                                <div className={style.Background}>
                                    <Header />
                                    <SearchForm onSearch={onSearch} />
                                </div>
                                <BookModal />
                            </>
                        }
                    />
                </Routes>
            </HashRouter>
        </div>
    );
}

export default App;
