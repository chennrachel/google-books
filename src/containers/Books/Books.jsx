import style from './Books.module.scss';
import BookCard from '../../components/BookCard/BookCard';
import { useState, useEffect } from 'react';
import { searchForBook } from '../../service/searchForBook';

const Books = ({ query }) => {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getResults = async (query) => {
            setIsLoading(true);
            const results = await searchForBook(query);
            console.log(results);
            setBooks(results.items);
            setIsLoading(false);
        };
        getResults(query);
    }, [query]);

    return (
        <section className={style.Section}>
            {isLoading && <p className={style.Loading}>Loading...</p>}
            {books &&
                books.map((books) => <BookCard key={books.id} books={books} />)}
        </section>
    );
};

export default Books;
