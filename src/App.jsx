
import './styles/App.css'

import MainFrom from './screen/MainForm';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleLogin from './screen/single/SingleLogin';
import SingleQ1 from './screen/single/SingleQ1';
import SingleQ2 from './screen/single/SingleQ2';
import SingleQ3 from './screen/single/SingleQ3';
import SingleQ4 from './screen/single/SingleQ4';
import SingleQ5 from './screen/single/SingleQ5';
import CheckSingleQ from './screen/single/CheckSingleQ';
import SingleCreateLink from './screen/single/SingleCreateLink';






function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainFrom />} />
        <Route path="/SingleLogin" element={<SingleLogin />} />
        <Route path="/SingleQ1" element={<SingleQ1 />} />
        <Route path="/SingleQ2" element={<SingleQ2 />} />
        <Route path="/SingleQ3" element={<SingleQ3 />} />
        <Route path="/SingleQ4" element={<SingleQ4 />} />
        <Route path="/SingleQ5" element={<SingleQ5 />} />
        <Route path="/CheckSingleQ" element={<CheckSingleQ />} />
        <Route path="/SingleCreateLink" element={<SingleCreateLink />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
