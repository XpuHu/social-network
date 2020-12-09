import styles from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ name, id, avatar }) => {
   return (
      <div className={styles.dialog}>
         <NavLink to={`/dialogs/${id}`} activeClassName={styles.active}>
            <img src={avatar} alt='' />
            <p>{name}</p>
         </NavLink>
      </div>
   );
};

export default DialogItem;
