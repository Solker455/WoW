import './App.css';
import { Header } from './components/header';
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  let [token, setToken] = useState(window.location.search.replace('?code=', ''))
  const loginClick = function () {
    window.location.href = 'https://oauth.battle.net/oauth/authorize?client_id=7347dbd64c2b4689aecc2bf54350bab2&redirect_uri=http://localhost:3000/&region=eu&response_type=code'
  }

  const logoutClick = function () {
    localStorage.clear()
    dispatch({ type: 'LOGOUT' });
  }

  useEffect(() => {
    dispatch({ type: 'SET_LOGIN', payload: token });
  }, [dispatch, token])

  return (
    <div className="App">
      <Header loginClick={loginClick} logoutClick={logoutClick} />
    </div>
  );
}

export default App;
