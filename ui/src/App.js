import './App.css';
import { HashRouter, Routes, Route, NavLink } from 'react-router-dom'

function Head() {
  return (
    <div>
      <h1>Орел</h1>
      <NavLink to='/tail'>перевернуть</NavLink>
    </div>
  );
}

function Tail() {
  return (
    <div>
      <h1>Решка</h1>
      <NavLink to='/'>перевернуть</NavLink>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <Routes>
            <Route path="/" element={ <Head /> }></Route>
            <Route path="/tail" element={ <Tail /> }></Route>
          </Routes>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
