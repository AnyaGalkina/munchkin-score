import React from 'react';
import './App.css';
import {Main} from './components/main/Main';
import bg from './assets/images/bg3.jpg';
import {NavBar} from './components/footer/Footer';

function App() {
    return (
        <div className="App" style={{backgroundImage: `url(${bg})`, minHeight: '100vh'}}>
            <Main/>
            <NavBar/>
        </div>
    );
}

export default App;
