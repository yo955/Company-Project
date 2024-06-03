// import logo from './logo.svg';
import './App.css';
import './components/css/styleToAll.css';
import Navbar from './components/Navbar';
import Header  from './components/Header';
import Custmors from './components/Custmers';
import Leading from './components/Leading';
import Building from './components/Building';
import CaseStudy from './components/CaseStudy';
function App() {
  return (
   
    <div className ="container">
         <Navbar/>
    <Header/>
    <Custmors/>
    <Leading/>    
    <CaseStudy/>
    <Building/>
    
      </div>
  
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
