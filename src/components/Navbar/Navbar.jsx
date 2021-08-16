import styles from './Navbar.module.css';
import MenuContainer from "./Menu/MenuContainer";
import FriendsContainer from "./Friends/FriendsContainer";

const Navbar = () => {
   return (
      <nav className={ styles.nav }>
         <MenuContainer />
         <FriendsContainer />
      </nav>
   );

};

export default Navbar;
