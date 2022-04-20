import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
   email: Yup.string().email('Invalid email').required('Required'),
   password: Yup.string().min(2, 'Too short').max(25, 'Too long').required('Required')
});

export const NewMessageSchema = Yup.object().shape({
   newMessage: Yup.string().max(100, 'Too long').required('')
});


