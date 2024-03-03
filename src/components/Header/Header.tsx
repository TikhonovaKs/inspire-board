import { Link } from "react-router-dom";
import { RiAccountCircleLine, RiSearch2Line } from "react-icons/ri";
import { ReactComponent as LogoIcon } from "../../Icons/logo.svg";
import { useState } from "react";
import styles from './Header.module.scss';

export default function Header() {
  const [iconState, setIconState] = useState(false);

  function handleClick() {
    setIconState(!iconState);
  }

  return (
    <header>
        <div>
          <Link to="/search">
            <LogoIcon className={styles.logo} />
          </Link>
        </div>

        <div className="header__right">
          {iconState ? (
            <Link to="/search" onClick={handleClick}>
              <div className={styles.button}>
              <RiSearch2Line />
              <p>Go to search</p>        
              </div>
            </Link>
          ) : (
            <Link to="/myboard" onClick={handleClick}>
              <div className={styles.button}>
              <RiAccountCircleLine />
              <p>My board</p>        
              </div>
            </Link>
          )}
        </div>
    </header>
  );
}
