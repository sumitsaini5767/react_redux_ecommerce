import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsDeatils from './components/CardsDeatils';
import Cards from './components/Cards';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/cart/:id' element={<CardsDeatils />} />
      </Routes>

    </>
  );
}

export default App;
