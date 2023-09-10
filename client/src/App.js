import './App.css';
import { Routes, Route } from "react-router-dom";
import Heading from '../src/components/Heading'
import List from './components/Post/List';
import Upload from './components/Post/Upload';
import { useState } from 'react';


function App() {

  return (
    <>
      <Heading />
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/upload' element={< Upload />} />
      </Routes>
    </>
  );
}

export default App;
