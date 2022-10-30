import style from './Books.module.scss';
import BookCard from '../../components/BookCard/BookCard';
import { useState, useEffect } from 'react';
import { searchForBook } from '../../service/searchForBook';

const Books = ({ query }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getResults(query);
    }, [query]);

    const getResults = async (query) => {
        const results = await searchForBook(query);
        console.log(results);
        setBooks(results.items);
    };

    return (
        <section className={style.Section}>
            {books &&
                books.map((books) => <BookCard key={books.id} books={books} />)}
        </section>
    );
};

export default Books;
