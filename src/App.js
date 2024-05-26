import 'bootstrap/dist/css/bootstrap.min.css';//Imports the default css
import './css/App.css';
import AppRoutes from "./components/navigation/AppRoutes";
import PrimaryNavbar from "./components/navigation/PrimaryNavbar";
import Footer from './components/navigation/Footer';

function App() {
  return (
      <>
          <PrimaryNavbar/>
          <AppRoutes/>
          <Footer/>
      </>
  );
}
/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
