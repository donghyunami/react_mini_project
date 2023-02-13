import React from 'react';
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>리덕스 툴킷 공부하기</h1>
      <div className="counter">
        <Counter />
      </div>
    </div>
  );
}

export default App;
