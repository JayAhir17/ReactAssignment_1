import logo from './logo.svg';
import './App.css';



function App() {
  return (
      <div className="App"> 
          <header className="App-header">
             {/* <img src={logo} className="App-logo" alt="logo" /> */}
             <img src={logo} className="App-logo" alt="logo"/>
              <p style={{backgroundColor:"#61dafb", width:"100%", height:"100px",   display:"flex", justifyContent:"center", alignItems:"center", color:"#000", fontSize:"50px", fontWeight:"600"}}>
                  Hello world</p>
              <a
                  className="App-link"
                  href="https://react.dev/"
                  target="_blank"
                  rel="noopener noreferrer" 
              >
                 jayzala
              </a>
          </header>
      </div>
  );
}

export default App;