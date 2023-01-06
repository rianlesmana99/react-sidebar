import { useState } from 'react';
import style from './Sidebar.module.css';
import { FcNfcSign } from 'react-icons/fc';
import { RxCross2 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

export default function Sidebar() {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }

    return (
        <nav className={style.nav}>
            <div className={style.container}>
                {/* Layoout from mobile device */}
                <figure className={style['nav-logo']}>
                    <FcNfcSign />
                    <figcaption className={style['nav-logo-text']}>R-TeCh</figcaption>
                </figure>
                <div onClick={handleClick} className={style['nav-button']}>
                    <div className={style.items}></div>
                    <div className={style.items}></div>
                    <div className={style.items}></div>
                </div>
                <ul className={
                    show ? style['nav-list'] : style['nav-list-hidden']
                }>
                    <h1 className={style['nav-list-title']}>MENU</h1>
                    <li className={style['nav-list-item']}>
                        <Link to="/" onClick={handleClick}>Home</Link>
                    </li>
                    <li className={style['nav-list-item']}>
                        <Link to="/about" onClick={handleClick}>About</Link>
                    </li>
                    <li className={style['nav-list-item']}>
                        <Link to="/service" onClick={handleClick}>Service</Link>
                    </li>
                    <li className={style['nav-list-item']}>
                        <Link to="#" onClick={handleClick}>Contact</Link>
                    </li>
                    <div onClick={handleClick} className={style['nav-list-close']}>
                        <RxCross2 />
                    </div>
                </ul>
            </div>
        </nav>
    )
}