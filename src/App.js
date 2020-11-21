import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

let smth = () => <Dialogs />

const App = (props) => {
  // console.log(props);
  const text = 'IT-kamasutra.com ';

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar friends={props.state.sidebarPage} />
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
          render={() => <Dialogs
            dialogsPage={props.state.dialogsPage}
            addMessage={props.addMessage}
            updateNewMessage={props.updateNewMessage}
          />} />
        <Route path='/profile'
          render={() => <Profile
            profilePage={props.state.profilePage}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}
          />} />
        <Route path='/news' component={News} />
        <Route path='/music' component={Music} />
        <Route path='/settings' component={Settings} />
      </div>
    </div>
  );
}

export default App;
