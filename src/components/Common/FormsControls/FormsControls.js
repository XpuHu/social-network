import styles from './FormsControls.module.css';
import { ErrorMessage } from "formik";
import React from "react";


export const Input = ({ field, form: { errors }, ...props }) => {

   return (
      <div>
         <input { ...field } { ...props }
                className={ `${ props.className } ${ ( errors[field.name] && styles.errored ) }` } />
         {/*{touched[field.name] && errors[field.name] && <div className={styles.error}>{errors[field.name]}</div>}*/ }
         <ErrorMessage name={ field.name } component="span" className={ styles.errored } />
      </div>
   )
}
