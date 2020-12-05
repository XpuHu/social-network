import styles from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ name, id }) => {
   return (
      <div className={styles.dialog}>
         <NavLink to={`/dialogs/${id}`} activeClassName={styles.active}>
            {name}
         </NavLink>
      </div>
   );
};

export default DialogItem;
