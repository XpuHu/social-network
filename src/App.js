import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { initialize } from "./redux/appReducer";
import Preloader from "./components/Common/Preloader/Preloader";

class App extends React.Component {

   componentDidMount() {
      this.props.initialize();
   }

   render() {
      if (!this.props.initialized) {
         return <Preloader />
      }
      return (
         <BrowserRouter>
            <div className='app-wrapper'>
               <HeaderContainer />
               <div className='navbar-content-wrapper'>
                  <Navbar />
                  <div className='content-wrapper'>
                     <Route path='/profile/:userId?'>
                        <ProfileContainer />
                     </Route>
                     <Route path='/dialogs'>
                        <DialogsContainer />
                     </Route>
                     <Route path='/news'>
                        <News />
                     </Route>
                     <Route path='/music'>
                        <Music />
                     </Route>
                     <Route path='/users'>
                        <UsersContainer />
                     </Route>
                     <Route path='/settings'>
                        <Settings />
                     </Route>
                     <Route path='/login'>
                        <LoginContainer />
                     </Route>
                  </div>
               </div>
            </div>
         </BrowserRouter>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      initialized: state.app.initialized
   }
}

export default compose(
   connect(mapStateToProps, { initialize })
)(App);
