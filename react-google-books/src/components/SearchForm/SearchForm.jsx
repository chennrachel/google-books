import { useState } from 'react';
import style from './SearchForm.module.scss';
import { useNavigate } from 'react-router-dom';

const SearchForm = ({ onSearch }) => {
    const [search, setSearch] = useState('');
    const [searchNumber, setSearchNumber] = useState(10);
    // const [initialSearch, setInitialSearch] = useState(false);
    const navigate = useNavigate();

    const onInputChange = (event) => {
        const value = event.target.value;
        setSearch(value);
    };

    const onSearchNumberChange = (event) => {
        const value = event.target.value;
        setSearchNumber(value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        onSearch(search, searchNumber);
        navigate('/books/');
    };

    return (
        <>
            <form onSubmit={onFormSubmit} className={style.Form}>
                <div>
                    <label className={style.Form__Label}>Name:</label>
                    <input
                        className={style.Form__Input}
                        type='text'
                        value={search}
                        onChange={onInputChange}
                    ></input>
                </div>
                <div>
                    <label className={style.Form__Label}>
                        Results per page:{' '}
                    </label>
                    <select
                        className={style.Form__InputDropDown}
                        value={searchNumber}
                        onChange={onSearchNumberChange}
                    >
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                    </select>

                    <input
                        className={style.Form__Submit}
                        type='submit'
                        value='Search'
                    />
                </div>
            </form>
        </>
    );
};

export default SearchForm;
