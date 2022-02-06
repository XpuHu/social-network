import React from 'react';
import styles from './NewMessageForm.module.css';
import { ErrorMessage, Field, Form, Formik } from "formik";

const NewMessageForm = (props) => {

   const submit = (values, { setSubmitting, resetForm }) => {
      props.addNewMessageHandler(values.newMessage);
      setSubmitting(false);
      resetForm();
   }

   const validate = (values) => {
      const errors = {};
      if ( !values.newMessage) {
         errors.newMessage = 'Required';
      }
      return errors;
   }

   return (
      <Formik
         initialValues={ {
            newMessage: ''
         } }

         onSubmit={ submit }
         validate={ validate }
      >
         { ({ isSubmitting }) => (
            <Form>
               <Field name={ 'newMessage' } id={ 'newMessage' } className={ styles.newPostText } />
               <ErrorMessage name="newMessage" component="div" />

               <button type={ 'submit' } disabled={ isSubmitting } className={ styles.submit }>send</button>
            </Form>
         ) }
      </Formik>
   );
}

export default NewMessageForm;
