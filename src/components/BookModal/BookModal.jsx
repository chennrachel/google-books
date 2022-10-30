import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Books from '../../containers/Books/Books';
import { searchById } from '../../service/searchForBook';
import style from './BookModal.module.scss';

const BookModal = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    const getIndividualBook = async (id) => {
        const results = await searchById(id);
        return results;
    };

    useEffect(async () => {
        const result = await getIndividualBook(id);
        setBook(result);
        console.log(result);
    }, []);

    return (
        <>
            {book && (
                <main>
                    {book.volumeInfo.title && <h1>{book.volumeInfo.title}</h1>}
                    <div className={style.Card}>
                        <img
                            className={style.Img}
                            src={
                                book.volumeInfo.imageLinks
                                    ? book.volumeInfo.imageLinks.thumbnail
                                    : 'https://islandpress.org/sites/default/files/default_book_cover_2015.jpg'
                            }
                        />
                        <div className={style.Text}>
                            {book.volumeInfo.authors && (
                                <h3>
                                    By: {book.volumeInfo.authors.join(', ')}
                                </h3>
                            )}
                            {book.volumeInfo.publishedDate && (
                                <p>
                                    Published: {book.volumeInfo.publishedDate}
                                </p>
                            )}
                            {book.volumeInfo.categories && (
                                <p>Categories: {book.volumeInfo.categories}</p>
                            )}
                            {book.volumeInfo.description && (
                                <p>
                                    Description:{' '}
                                    {book.volumeInfo.description.replace(
                                        /\s*\<.*?\>\s*/g,
                                        ''
                                    )}
                                </p>
                            )}
                            {book.volumeInfo.language && (
                                <p>
                                    Available languages:{' '}
                                    {book.volumeInfo.language}
                                </p>
                            )}
                        </div>
                    </div>
                </main>
            )}
        </>
    );
};

export default BookModal;
