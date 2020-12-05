import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
   return (
      <nav className={styles.nav}>
         <div className={styles.mainMenu}>
            <ul className={styles.menuList}>
               <li className={styles.item}>
                  <NavLink to='/profile' activeClassName={styles.activeLink}>Profile</NavLink>
               </li>
               <li className={styles.item}>
                  <NavLink to='/dialogs' activeClassName={styles.activeLink}>Messages</NavLink>
               </li>
               <li className={styles.item}>
                  <NavLink to='/news' activeClassName={styles.activeLink}>News</NavLink>
               </li>
               <li className={styles.item}>
                  <NavLink to='/music' activeClassName={styles.activeLink}>Music</NavLink>
               </li>
            </ul>
         </div>
         <div className={styles.additionalMenu}>
            <ul className={styles.menuList}>
               <li className={styles.item}>
                  <NavLink to='/settings' activeClassName={styles.activeLink}>Settings</NavLink>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
