import './App.css';
import { Routes, Route } from "react-router-dom";
import Heading from '../src/components/Heading'
import List from './components/Post/List';
import Upload from './components/Post/Upload';
import Detail from './components/Post/Detail';
import Edit from './components/Post/Edit';
import Login from './components/User/Login';
import Register from './components/User/Register';
import { useDispatch } from 'react-redux'
import { loginUser, clearUser } from "./Reducer/userSlice.js"
import { useEffect } from 'react';
import firebase from './firebase.js';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfor) => {
      if (userInfor !== null) {
        dispatch(loginUser(userInfor.multiFactor.user))
      } else {
        dispatch(clearUser())
      }
    })
  }, [])


  return (
    <>
      <Heading />
      <Routes>
        <Route path='/' element={<List />} />
        <Route path='/upload' element={< Upload />} />
        <Route path='/post/:postNum' element={< Detail />} />
        <Route path='/edit/:postNum' element={< Edit />} />
        <Route path='/login' element={< Login />} />
        <Route path='/register' element={< Register />} />
      </Routes>
    </>
  );
}

export default App;
