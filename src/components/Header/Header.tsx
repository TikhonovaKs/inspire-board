import "./Header.css";
import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../Icons/logo-dark.svg";
import { ReactComponent as FindIcon } from "../../Icons/find-rectangle-dark.svg";
import { ReactComponent as AccountIcon } from "../../Icons/profile-dark.svg";
import { useState } from "react";

export default function Header() {
  const [iconState, setIconState] = useState(false);

  function handleClick() {
    setIconState(!iconState);
  }

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <Link to="/search">
            <LogoIcon className="header__icon header__icon--logo" />
          </Link>
        </div>

        <div className="header__right">
          {iconState ? (
            <Link to="/search" onClick={handleClick}>
              <FindIcon className="header__icon header__icon--find" />
            </Link>
          ) : (
            <Link to="/myboard" onClick={handleClick}>
              <AccountIcon className="header__icon header__icon--account" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
