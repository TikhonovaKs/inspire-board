import styles from './Footer.module.scss';
// import { Link } from "react-router-dom";
import { AiOutlineCopyright } from 'react-icons/ai';
import { ReactComponent as LogoIcon } from "../../Icons/logo-dark.svg";

function Footer() {
return(
    <footer>
        <div className={styles.name}>
          <AiOutlineCopyright className={styles.copy} />
          <p>Kseniia Tikhonova [Stockholm]</p>
        </div>
    </footer>
);
}
export default Footer;