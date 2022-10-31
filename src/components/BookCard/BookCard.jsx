import style from './BookCard.module.scss';
import { NavLink } from 'react-router-dom';

const BookCard = ({ books }) => {
    return (
        <section key={books.id} className={style.Card}>
            <NavLink to={`/books/${books.id}`}>
                <img
                    className={style.Img}
                    src={
                        books.volumeInfo.imageLinks
                            ? books.volumeInfo.imageLinks.thumbnail
                            : 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg'
                    }
                />
            </NavLink>
            <span className={style.Text}>
                <NavLink to={`/books/${books.id}`}>
                    <p className={style.Title}>
                        {books.volumeInfo.title}{' '}
                        {books.volumeInfo.publishedDate &&
                            `(${books.volumeInfo.publishedDate.substr(0, 4)})`}
                    </p>
                </NavLink>
                <p className={style.Author}>
                    {books.volumeInfo.authors &&
                        `by ${books.volumeInfo.authors.join(', ')}`}
                </p>
                <p className={style.Description}>
                    {books.volumeInfo.description}{' '}
                </p>
                <NavLink to={`/books/${books.id}`}>
                    <button className={style.Button}>See More</button>
                </NavLink>
            </span>
        </section>
    );
};

export default BookCard;
