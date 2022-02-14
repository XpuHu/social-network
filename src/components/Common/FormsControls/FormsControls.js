import styles from './FormsControls.module.css';
import { ErrorMessage } from "formik";
import React from "react";

const FormControl = ({ field, form, as: Tag, ...props }) => {
   const hasError = form.touched[field.name] && form.errors[field.name];
   const hasParentStyle = props.className !== undefined;

   return (
      <div>
         <Tag { ...field } { ...props }
              className={ `${ ( hasParentStyle ? props.className : '' ) } ${ ( hasError ? styles.errored : '' ) }` } />
         <ErrorMessage name={ field.name } component="span" className={ styles.errored } />
         {/*{ form.status !== undefined ? <div className={ styles.errored }>{ form.status }</div> : null }*/}
      </div>
   )
}

export const Input = (props) => {

   return (
      <FormControl { ...props } as='input' />
   );
}

export const Textarea = (props) => {

   return (
      <FormControl { ...props } as='textarea' />
   );
}
