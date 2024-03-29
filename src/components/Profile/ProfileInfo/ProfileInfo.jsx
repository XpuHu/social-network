import styles from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/avatar.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, updateUserStatus, status }) => {
   const contacts = Object.entries(profile.contacts).map(([source, value], index) => {
      return (
         <div className={ styles.contactRow } key={index}>
            <div className={ styles.contactLabel }>{ source }</div>
             <div className={ styles.contactValue }>{ value ? <a href={value} target={"_blank"}>{value}</a> : '-' }</div>
         </div>
      )
   })

   return (
      <div className={ styles.profile }>
         <div className={ styles.avatar }>
            <img src={ profile.photos.large ? profile.photos.large : userPhoto } alt='avatar' />
         </div>
         <div className={ styles.profileInfo }>
            <div className={ styles.commonInfo }>
               <h1>{ profile.fullName }</h1>
               <ProfileStatusWithHooks status={ status } updateUserStatus={ updateUserStatus } />
               <div className={ styles.jobInfo }>
                  <p>Ищу работу: { profile.lookingForAJob ? 'Да' : 'Нет' }</p>
                  <p><i>{ profile.lookingForAJobDescription }</i></p>
               </div>
            </div>
            <div className={ styles.detailedInfo }>
               <p>{ profile.aboutMe }</p>
               <div className={ styles.contacts }>
                  { contacts }
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProfileInfo;
