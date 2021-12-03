import { useState } from 'react';
import { apiToken } from './api/api';
import './App.css';
import { PublicRoute } from './routes/public';

function App() {
  let [code, setCode] = useState(window.location.search.replace('?code=', ''))
  if (code) {
    let token = apiToken(code)
    console.log(token)
  }
  return (
    <div className="App">
      <PublicRoute />
    </div>
  );
}

export default App;
