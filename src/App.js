import { Routes, Route } from 'react-router-dom';
import './App.css';
import Clock from './pages/Clock';
import Homepage from './pages/Homepage';
import Weather from './pages/Weather';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </>
  );
}

export default App;
