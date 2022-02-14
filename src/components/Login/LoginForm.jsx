import React from "react";
import styles from './Login.module.css';
import { Field, Form, Formik } from "formik";
import { LoginSchema } from "../../utils/validators/validators";
import { Input } from "../Common/FormsControls/FormsControls";

const LoginForm = (props) => {

   const submit = (values, { setStatus, setSubmitting }) => {
      const { email, password, rememberMe } = values;
      props.loginUser(email, password, rememberMe, setStatus);
      setSubmitting(false);
   }

   return (
      <Formik
         initialValues={ {
            email: '',
            password: '',
            rememberMe: false
         } }

         // validate={ validate }
         validationSchema={ LoginSchema }

         onSubmit={ submit }
      >
         { ({ errors, touched, isSubmitting, status }) => (
            <Form className={ styles.loginForm }>

               {/*<label htmlFor={ 'email' }>Login</label>*/ }
               <Field placeholder={ 'Email' } name={ 'email' } id={ 'email' } component={ Input } />

               {/*<label htmlFor={ 'password' }>Password</label>*/ }
               <Field placeholder={ 'Password' } name={ 'password' } id={ 'password' } type={ 'password' }
                      component={ Input } />

               <div className={ styles.checkbox }>
                  <Field type={ 'checkbox' } name={ 'rememberMe' } id={ 'rememberMe' } />
                  <label htmlFor={ 'rememberMe' }>Remember me</label>
               </div>

               <button type={ 'submit' } disabled={ isSubmitting }>Login</button>

               { status !== undefined ? <span className={styles.errored}>{ status }</span> : null }
            </Form>
         ) }
      </Formik>
   )
}

export default LoginForm;
