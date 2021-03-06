import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = ({ state, dispatch }) => {
   return (
      <BrowserRouter>
         <div className='app-wrapper'>
            <Header />
            <div className='navbar-content-wrapper'>
               <Navbar state={state.sidebar} />
               <div className='content-wrapper'>
                  <Route path='/profile'>
                     <Profile
                        profilePage={state.profilePage}
                        dispatch={dispatch}
                     />
                  </Route>
                  <Route path='/dialogs'>
                     <Dialogs
                        dialogsPage={state.dialogsPage}
                        dispatch={dispatch}
                     />
                  </Route>
                  <Route path='/news'>
                     <News />
                  </Route>
                  <Route path='/music'>
                     <Music />
                  </Route>
                  <Route path='/settings'>
                     <Settings />
                  </Route>
               </div>
            </div>
         </div>
      </BrowserRouter>
   );
};

export default App;
