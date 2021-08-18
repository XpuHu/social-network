import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = ({ mainMenu, settingsMenu, usersMenu }) => {
   return (
      <div className={ styles.menuBlock }>
         <ul className={ styles.menuList }>
            { mainMenu.map((link, i) => (
               <li className={ styles.item } key={ i }>
                  <NavLink
                     to={ link.path }
                     activeClassName={ styles.activeLink }
                  >
                     { link.label }
                  </NavLink>
               </li>
            )) }
         </ul>

         <ul className={ styles.menuList }>
            { usersMenu.map((link, i) => (
               <li className={ styles.item } key={ i }>
                  <NavLink
                     to={ link.path }
                     activeClassName={ styles.activeLink }
                  >
                     { link.label }
                  </NavLink>
               </li>
            )) }
         </ul>

         <ul className={ styles.menuList }>
            { settingsMenu.map((link, i) => (
               <li className={ styles.item } key={ i }>
                  <NavLink
                     to={ link.path }
                     activeClassName={ styles.activeLink }
                  >
                     { link.label }
                  </NavLink>
               </li>
            )) }
         </ul>
      </div>
   );
};

export default Menu;
