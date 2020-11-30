import styles from './Navbar.module.css';

const Navbar = () => {
   return (
      <nav className={styles.nav}>
         <div className={styles.mainMenu}>
            <ul className={styles.menuList}>
               <li className={styles.item}>
                  <a href='/profile'>Profile</a>
               </li>
               <li className={styles.item}>
                  <a href='/dialogs'>Messages</a>
               </li>
               <li className={styles.item}>
                  <a href='/news'>News</a>
               </li>
               <li className={styles.item}>
                  <a href='/music'>Music</a>
               </li>
            </ul>
         </div>
         <div className={styles.additionalMenu}>
            <ul className={styles.menuList}>
               <li className={styles.item}>
                  <a href='/settings'>Settings</a>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
