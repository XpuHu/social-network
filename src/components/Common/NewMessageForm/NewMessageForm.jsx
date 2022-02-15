import React from 'react';
import styles from './NewMessageForm.module.css';
import { Field, Form, Formik } from "formik";
import { NewMessageSchema } from "../../../utils/validators/validators";
import { Input } from "../FormsControls/FormsControls";

const NewMessageForm = (props) => {

   const submit = (values, { setSubmitting, resetForm }) => {
      props.addNewMessageHandler(values.newMessage);
      setSubmitting(false);
      resetForm();
   }

   return (
      <Formik
         initialValues={ {
            newMessage: ''
         } }

         onSubmit={ submit }
         validationSchema={NewMessageSchema}
      >
         { ({ isSubmitting }) => (
            <Form className={styles.messageForm}>
               <Field name={ 'newMessage' } id={ 'newMessage' } className={ styles.newMessageText } component={Input} />

               <button type={ 'submit' } disabled={ isSubmitting } className={ styles.submit }>send</button>
            </Form>
         ) }
      </Formik>
   );
}

export default NewMessageForm;
