import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import Menu from './Menu/Menu';
import styles from './Navbar.module.css';

const Navbar = ({ state }) => {
   return (
      <nav className={styles.nav}>
         <Menu state={state.menu} />
         <Friends friends={state.friends} />
      </nav>
   );
};

export default Navbar;
