import React, { useEffect, useState } from "react";
import styles from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

   const [editMode, setEditMode] = useState(false);
   const [status, setStatus] = useState(props.status);

   const activateEditMode = () => {
      setEditMode(true);
   }

   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value);
   }

   const deactivateEditMode = () => {
      setEditMode(false);
      props.updateUserStatus(status);
   }

   useEffect(() => {
      setStatus(props.status);
   },[props.status]);

   return (
      <div className={ styles.status }>
         { !editMode &&
         <div onDoubleClick={activateEditMode}>
            { status }
         </div>
         }
         { editMode &&
         <div>
            <input autoFocus={ true }
                   onChange={ onStatusChange }
                   onBlur={ deactivateEditMode }
                   value={ status }/>
         </div>
         }
      </div>
   );
}

export default ProfileStatusWithHooks;
