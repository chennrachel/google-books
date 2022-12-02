import { useState } from 'react';
import style from './SearchForm.module.scss';
import { useNavigate } from 'react-router-dom';
import buttonStyle from '../Button/Button.module.scss';

const SearchForm = ({ onSearch }) => {
    // useState for search input
    const [search, setSearch] = useState('');
    // useState for number of book results per search
    const [searchNumber, setSearchNumber] = useState(10);
    const navigate = useNavigate();

    // function: change search input using the value in the input
    const onInputChange = (event) => {
        const value = event.target.value;
        setSearch(value);
    };

    // function: change number of book results per search using the value in the dropdown
    const onSearchNumberChange = (event) => {
        const value = event.target.value;
        setSearchNumber(value);
    };

    // function: on submit form, search and show the search results: books
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
                        placeholder='search for a book'
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
                        className={buttonStyle.Button}
                        type='submit'
                        value='Search'
                    />
                </div>
            </form>
        </>
    );
};

export default SearchForm;
