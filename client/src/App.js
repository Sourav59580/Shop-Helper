import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { List } from './components/List';


function App() {
  return (
    <React.Fragment>
     <Navbar /> 
     <Form/>
     <List />
    </React.Fragment>
  );
}

export default App;
