import './App.css';
import { PublicRoute } from './routes/public';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { PrivateRoute } from './routes/private';

function App() {
  let token = window.location.search.replace('?access_token=', ''); //получение токена для авторизации из get параметра
  let dispatch = useDispatch();
  if (token) {
    dispatch({ type: 'SET_TOKEN', token }); //установка токена в redux
  }
  let auth = useSelector(state => state.auth.auth) //получение статуса авторизации
  if (auth) {
    return (
      <div className="App">
        <PrivateRoute />
      </div>
    )
  } else {
    return (
      <div className="App">
        <PublicRoute />
      </div>
    );
  }
}

export default App;
