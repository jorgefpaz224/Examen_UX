import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import PageRestaurantes from './components/PageRestaurantes';


function App() {

    return (
        <div>
            <PageRestaurantes />
        </div>
    );
}

export default App;
