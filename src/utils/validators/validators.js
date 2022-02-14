import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
   email: Yup.string().email('Invalid email').required('Required'),
   password: Yup.string().min(6, 'Too short').max(10, 'Too long').required('Required')
});

export const NewMessageSchema = Yup.object().shape({
   newMessage: Yup.string().max(10, 'Too long').required('')
});


