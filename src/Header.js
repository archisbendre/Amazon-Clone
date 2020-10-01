import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header">

            <Link to="/">
                {/*logo on the left --> img*/}
                <img className="header__logo" src="https://image.shutterstock.com/image-photo/kiev-ukraine-may-07-2015-260nw-276929006.jpg" alt=""></img>

            </Link>

            {/*search box*/}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* 3 links */}
            <div className="header__nav">

                {/* 1st link*/}
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.Email}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign in'}</span>
                    </div>

                </Link>

                {/* 2nd link*/}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">Orders</span>
                    </div>

                </Link>

                {/* 3rd link*/}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>

                </Link>

                {/* 4th link*/}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        {/* shopping basket icon */}
                        <ShoppingBasketIcon />
                        {/* no of items in basket */}
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>

                    </div>

                </Link>


            </div>
            {/* Basket icon with numbar */}
        </nav>
    )
}

export default Header
