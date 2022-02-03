import React from "react";
import styles from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

   state = {
      editMode: false
   }

   toggleEditMode = () => {
      this.setState({
         editMode: !this.state.editMode
      })
   }

   render() {
      return (
         <div className={ styles.status }>
            {!this.state.editMode &&
               <div onDoubleClick={this.toggleEditMode}>
                  { this.props.status }
               </div>
            }
            {this.state.editMode &&
               <div>
                  <input autoFocus={true} onBlur={this.toggleEditMode} value={this.props.status}/>
               </div>
            }
         </div>
      );
   }
};

export default ProfileStatus;
