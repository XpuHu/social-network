import React from "react";
import styles from './Login.module.css';
import { ErrorMessage, Field, Form, Formik } from "formik";
import { LoginSchema } from "../../utils/validators/validators";
import { Input } from "../Common/FormsControls/FormsControls";

const LoginForm = (props) => {

   const submit = (values, { setSubmitting }) => {
      const { email, password, rememberMe } = values;
      //props.loginUser(email, password, rememberMe);
      console.log(values)
      setSubmitting(false);
   }

   const validate = (values) => {
      const errors = {};
      if ( !values.email) {
         errors.email = 'Required';
      } else if (
         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
         errors.email = 'Invalid email address';
      }
      return errors;
   }


   return (
      <Formik
         initialValues={ {
            email: '',
            password: '',
            rememberMe: false
         } }

         // validate={ validate }
         validationSchema={LoginSchema}

         onSubmit={ submit }
      >
         { ({ errors, isSubmitting }) => (
            <Form className={styles.loginForm}>
               <div>
                  {/*<label htmlFor={ 'email' }>Login</label>*/ }
                  <Field placeholder={ 'Email' } name={ 'email' } id={ 'email' }/>
                  <ErrorMessage name="email" component="div" />
               </div>

               <div>
                  {/*<label htmlFor={ 'password' }>Password</label>*/ }
                  <Field placeholder={ 'Password' } name={ 'password' } id={ 'password' } type={ 'password' } />
                  <ErrorMessage name="password" component="div" />
               </div>

               <div className={ styles.checkbox }>
                  <Field type={ 'checkbox' } name={ 'rememberMe' } id={ 'rememberMe' } />
                  <label htmlFor={ 'rememberMe' }>Remember me</label>
               </div>

               <button type={ 'submit' } disabled={ isSubmitting }>Login</button>
            </Form>
         ) }
      </Formik>
   )
}

export default LoginForm;
