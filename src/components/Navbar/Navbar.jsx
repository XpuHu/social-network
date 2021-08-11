import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import Menu from './Menu/Menu';
import styles from './Navbar.module.css';
import StoreContext from "../../storeContext";

const Navbar = () => {
   return (
      <StoreContext.Consumer>
         {
            (store) => {
               const state = store.getState();
               const { menu, friends } = state.sidebar;
               return (
                  <nav className={ styles.nav }>
                     <Menu state={ menu } />
                     <Friends friends={ friends } />
                  </nav>
               );
            }
         }
      </StoreContext.Consumer>

   );
};

export default Navbar;
