import './App.css';
import SeasonStanding from './components/pages/SeasonStanding';
import Navigation from './components/layout/navigation/NavigationBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/pages/Landing';

function App() {
  return (
    <BrowserRouter>
        <Navigation/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/standings" element={<SeasonStanding/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
