import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import ContactList from './components/ContactList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import contactReducer from './redux/reducers/contactReducer';

const store = createStore(contactReducer,composeWithDevTools())

function App() {
   return (
      <><Provider store={store}>
         <Sidebar />
         <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactList/>} />
        <Route path="/add" element={<AddContact/>} />
        <Route path="/edit/:id" element={<EditContact/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
         </Provider>
         {/* <ContactList/> */}
      </>

   );
}

export default App;
