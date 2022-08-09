import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Login from './features/auth/login/pages';
import SignUp from './features/auth/signup/pages';
import ToDo from './features/layout/todo';
function App() {

  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/admin' element={<ToDo />} />
    </Routes>
  );
}

export default App;
