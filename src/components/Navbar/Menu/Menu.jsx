import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = ({ mainMenu, additionalMenu }) => {
   return (
      <div className={styles.menuBlock}>
         <div className={styles.mainMenu}>
            <ul className={styles.menuList}>
               {mainMenu.map((link, i) => (
                  <li className={styles.item} key={i}>
                     <NavLink
                        to={link.path}
                        activeClassName={styles.activeLink}
                     >
                        {link.label}
                     </NavLink>
                  </li>
               ))}
            </ul>
         </div>
         <div className={styles.additionalMenu}>
            <ul className={styles.menuList}>
               {additionalMenu.map((link, i) => (
                  <li className={styles.item} key={i}>
                     <NavLink
                        to={link.path}
                        activeClassName={styles.activeLink}
                     >
                        {link.label}
                     </NavLink>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default Menu;
