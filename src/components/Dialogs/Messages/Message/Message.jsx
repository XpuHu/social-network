import styles from './Message.module.css';

const Message = ({ message, my, avatar }) => {
   let messageStyle;
   if (!my) {
      messageStyle = styles.message;
   } else {
      messageStyle = styles.messageMy;
   }

   return (
      <div className={messageStyle}>
         <img src={avatar} alt='' />
         <p>{message}</p>
      </div>
   );
};

export default Message;
