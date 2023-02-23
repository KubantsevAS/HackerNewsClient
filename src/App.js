import './App.css';
import Navbar from './components/Navbar/Navbar';
import LatestNews from './components/LatestNews/LatestNews';
import { Route, Routes } from 'react-router-dom';
import ShowStories from './components/ShowStories/ShowStories';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/:type' element={<ShowStories/>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
