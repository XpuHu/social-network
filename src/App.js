import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

const App = () => {
   return (
      <div className='app-wrapper'>
         <Header />
         <div className='navbar-content-wrapper'>
            <Navbar />
            <div className='content-wrapper'>
               <Profile />
            </div>
         </div>
      </div>
   );
};

export default App;
