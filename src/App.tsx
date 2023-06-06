import React from 'react';
import './App.css';
import {Main} from './components/main/Main';
// import bg from './assets/images/bg.jpg';
import bg from './assets/images/bg3.jpg';
// import bg from './assets/images/bg1.jpg';

function App() {
    return (
        <div className="App" style={{ backgroundImage: `url(${bg})`, minHeight: '100vh'}}>
            <Main/>
        </div>
    );
}

export default App;
