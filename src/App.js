// import logo from './logo.svg';
import './App.css';
import './components/css/styleToAll.css';
import Navbar from './components/Navbar';
import Header  from './components/Header';
import Custmors from './components/Custmers';
import Leading from './components/Leading';
import Building from './components/Building';
import CaseStudy from './components/CaseStudy';
import { useState } from 'react';
import SimpleSlider from './components/SimbleSlider';
//mui
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';




function App() {
  const [myMode,setMymode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: myMode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
       <CssBaseline />
       
    <div className ="container">
    <Navbar setMymode={setMymode}/>
    <SimpleSlider/>
    <Header/>
    <Custmors/>
    <Leading/>    
    <CaseStudy/>
    <Building/>
  
      </div>
      </ThemeProvider>
  
    
  );
}

export default App;
