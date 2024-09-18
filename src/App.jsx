import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from "./components/Layout/Header/Header"
import Footer from "./components/Layout/Footer/Footer"
import Contact from './components/pages/Contact';

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
