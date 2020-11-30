import styles from './Navbar.module.css';

const Navbar = () => {
   return (
      <nav className={styles.nav}>
         <div className={styles.mainMenu}>
            <ul className={styles.menuList}>
               <li className={styles.item}>
                  <a href='/'>Profile</a>
               </li>
               <li className={styles.item}>
                  <a href='/'>Messages</a>
               </li>
               <li className={styles.item}>
                  <a href='/'>News</a>
               </li>
               <li className={styles.item}>
                  <a href='/'>Music</a>
               </li>
            </ul>
         </div>
         <div className={styles.additionalMenu}>
            <ul className={styles.menuList}>
               <li className={styles.item}>
                  <a href='/'>Settings</a>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
