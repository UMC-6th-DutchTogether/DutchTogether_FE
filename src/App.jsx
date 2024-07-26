import MainFrom from './MainHome/MainForm';
import Header from './MainHome/Header';
import Footer from './MainHome/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleLogin from './single/SingleLogin';
import SingleQ1 from './single/SingleQ1';
import SingleQ2 from './single/SingleQ2';
import SingleQ3 from './single/SingleQ3';
import SingleQ4 from './single/SingleQ4';
import SingleQ5 from './single/SingleQ5';
import CheckSingleQ from './single/CheckSingleQ';







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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
