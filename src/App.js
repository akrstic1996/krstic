import logo from './logo.webp';
import './App.css';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
        <img src={logo} alt="Logo" className="logo"/>
        <p className="paragraph">Hello this is Krstic.com!!! We're gonna make a cool site :D
        <br></br>
        Adding some more text so this fills up yeah? Herro peeper popper
        <br></br>
        gotta make a nav bar and several pages! Can't be that hard. Lets try and put it below.</p>
        <br></br>
        <Nav />
    </div>
  );
}

export default App;
