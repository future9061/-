import './App.css';
import { Routes, Route } from "react-router-dom";
import Heading from '../src/components/Heading'
import List from './components/Post/List';
import Upload from './components/Post/Upload';
import Detail from './components/Post/Detail';
import Edit from './components/Post/Edit';



function App() {

  return (
    <>
      <Heading />
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/upload' element={< Upload />} />
        <Route path='/post/:postNum' element={< Detail />} />
        <Route path='/edit/:postNum' element={< Edit />} />
      </Routes>
    </>
  );
}

export default App;
