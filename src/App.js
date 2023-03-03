import './App.sass';
import NavBar from './main-page/nav-bar/NavBar';
import Search from './main-page/search/Search';
import Auth from './main-page/auth/Auth'
import BestChats from './main-page/best-chats/BestChats';

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Search/>
      <Auth/>
    </div>
  );
}

export default App;
