import styles from './Header.module.css';
import logo from '../../img/logo_200x200.png';

const Header = () => {
   return (
      <header className={styles.header}>
         <img src={logo} alt='' />
      </header>
   );
};

export default Header;
