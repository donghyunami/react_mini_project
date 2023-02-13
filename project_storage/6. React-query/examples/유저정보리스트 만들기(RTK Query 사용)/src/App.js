import Contacts from './pages/Contacts';
import { Route, Routes } from 'react-router-dom';
import SimgleContact from './pages/SimgleContact';

function App() {
  return (
    <div className="App">
      <h1>리덕스 툴킷과 rtk 쿼리 사용하기</h1>
      <main>
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="contact/:id" element={<SimgleContact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
