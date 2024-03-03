// App.js
import React from 'react';
import SignaturePad from './components/sign';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line to import Bootstrap styles

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simply Sign the Pad and download it!</h1>
        <SignaturePad />
      </header>
    </div>
  );
}

export default App;
