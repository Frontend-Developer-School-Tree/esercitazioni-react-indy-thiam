import logo from './logo.svg';
import './App.css';

function AppL() {
  const nomi = ['ndiasse','indy','diouma','maguette','fatou']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <ul>
            {nomi.map(nome => ( 
              <li key={nome}>{nome}</li>
            )
          )}
          </ul>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React App
        </a>
      </header>
    </div>
  );
}

export default AppL;
