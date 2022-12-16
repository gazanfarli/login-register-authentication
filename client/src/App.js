import { Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import PrivatePage from './pages/PrivatePage';

function App() {
  return (
    <Routes>
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/' element={<PrivatePage />} />
    </Routes>
  );
}

export default App;
