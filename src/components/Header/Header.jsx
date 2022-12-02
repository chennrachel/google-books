import style from './Header.module.scss';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/');
    };

    return (
        <div className={style.Header}>
            <h1 className={style.Header__h1} onClick={goHome}>
                BOOK SEARCH
            </h1>
            <p className={style.Header__p}>
                Using the Google Books API, look up information on your
                favourite books!
            </p>
        </div>
    );
};

export default Header;
