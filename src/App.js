import { Routes, Route } from 'react-router-dom';

import AirBnbClone from './components/AirBnbClone';
import DigitalBusinessCard from './components/DigitalBusinessCard';
import SignUpPractice from './components/SignUpPractice';
import MemeGenerator from "./components/MemeGenerator";
import ReactFacts from "./components/ReactFacts";
import Tenzies from "./components/Tenzies";
import Quizzical from './components/Quizzical';
import Home from './components/Util/Home';
import NotFound from './components/Util/NotFound';


function App() {
  return (  
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/DigitalBusinessCard" element={<DigitalBusinessCard/>}/>
        <Route path="/AirBnbClone" element={<AirBnbClone/>}/>
        <Route path="/SignUpPractice" element={<SignUpPractice/>}/>
        <Route path="/MemeGenerator" element={<MemeGenerator/>}/>
        <Route path="/ReactFacts" element={<ReactFacts/>}/>
        <Route path="/Tenzies" element={<Tenzies/>}/>
        <Route path="/Quizzical" element={<Quizzical/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>     
    </div>
  );
}

export default App;
