import './App.sass';
import NavBar from '../src/main-page/nav-bar/NavBar'
import Search from '../src/main-page/search/Search'
import Auth from '../src/main-page/auth/Auth'
import BestChats from './main-page/best-chats/BestChats';



const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Search/>
      <Auth/>
      <BestChats/>
    </div>
  );
}

export default App;
