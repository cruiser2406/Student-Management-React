import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Studentdata from './components/Studentdata';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Studentdata/>}></Route>
      <Route path='/enroll' element={<Post/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
