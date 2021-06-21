import React, { useContext } from 'react';
import './App.css';
import { Store } from './Store';

function App() {
    const store = useContext(Store)
    console.log(store)
    return (
        <div>
            <h1>Rick & Morty</h1>
        </div>
    );
}

export default App;
