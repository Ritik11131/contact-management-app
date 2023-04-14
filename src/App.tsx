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
import { QueryClient } from '@tanstack/react-query';
import {QueryClientProvider} from '@tanstack/react-query'


const store = createStore(contactReducer, composeWithDevTools())
const queryClient = new QueryClient()

function App() {
   return (
      <QueryClientProvider client={queryClient}>
      <Provider store={store}>
         <BrowserRouter>
         <Sidebar />
            <Routes>
               <Route path="/" element={<ContactList />} />
               <Route path="/add" element={<AddContact />} />
               <Route path="/edit/:id" element={<EditContact />} />
               <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
         </BrowserRouter>
      </Provider>
      </QueryClientProvider>


   );
}

export default App;
