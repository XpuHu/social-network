import styles from './Header.module.css';
import logo from '../../img/logo_200x200.png';
import { NavLink } from "react-router-dom";

const Header = (props) => {
   return (
      <header className={ styles.header }>
         <img src={ logo } alt='' />
         <div className={ styles.authBlock }>
            { props.isAuth ?
               <NavLink to={ '/profile/' + props.userId }>
                  { props.login }
                  <button onClick={props.logoutUser} className={styles.logout}>Logout</button>
               </NavLink> :
               <NavLink to={ '/login' }>Login</NavLink> }
         </div>
      </header>
   );
};

export default Header;
