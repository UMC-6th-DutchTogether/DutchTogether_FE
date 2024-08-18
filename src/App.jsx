
import './styles/App.css'

import MainFrom from './screen/MainForm';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SingleSelect from './screen/single/SingleSelect';
import SingleLogin from './screen/single/SingleLogin';
import SingleQ1 from './screen/single/SingleQ1';
import SingleQ2 from './screen/single/SingleQ2';
import SingleQ3 from './screen/single/SingleQ3';
import SingleQ4 from './screen/single/SingleQ4';
import SingleQ5 from './screen/single/SingleQ5';
import CheckSingleQ from './screen/single/CheckSingleQ';
import SingleCreateLink from './screen/single/SingleCreateLink';
import MeetingDetails from './screen/getLink/MeetingDetails';
import MeetingCheck from './screen/getLink/MeetingCheck';

import MultiLogin from './screen/multi/MultiLogin';
import MultiQ1 from './screen/multi/MultiQ1';
import MultiQ2 from './screen/multi/MultiQ2';
import MultiQ3 from './screen/multi/MultiQ3';
import MultiQ4 from './screen/multi/MultiQ4';
import MultiCreateLink from './screen/multi/MultiCreateLink';

import SettlementStatusSelect from './screen/status/SettlementStatusSelect';
import SettlerCheckLogin from './screen/status/SettlerCheckLogin';
import SingleSettlerStatus from './screen/status/SingleSettlerStatus';
import AmountOnlyQ1 from './screen/single/AmountOnlyQ1';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainFrom />} />
        <Route path="/AmountOnlyQ1" element={<AmountOnlyQ1 />} />
        <Route path="/SingleSelect" element={<SingleSelect />} />
        <Route path="/SingleLogin" element={<SingleLogin />} />
        <Route path="/SingleQ1" element={<SingleQ1 />} />
        <Route path="/SingleQ2" element={<SingleQ2 />} />
        <Route path="/SingleQ3" element={<SingleQ3 />} />
        <Route path="/SingleQ4" element={<SingleQ4 />} />
        <Route path="/SingleQ5" element={<SingleQ5 />} />
        <Route path="/CheckSingleQ" element={<CheckSingleQ />} />
        <Route path="/SingleCreateLink" element={<SingleCreateLink />} />
        <Route path="/:link" element={<MeetingDetails />} />
        <Route path="/check-detail/:link" element={<MeetingCheck />} />

        <Route path="/MultiLogin" element={<MultiLogin />} />
        <Route path="/MultiQ1" element={<MultiQ1 />} />
        <Route path="/MultiQ2" element={<MultiQ2 />} />
        <Route path="/MultiQ3" element={<MultiQ3 />} />
        <Route path="/MultiQ4" element={<MultiQ4 />} />
        <Route path="/MultiCreateLink" element={<MultiCreateLink />} />

        <Route path="/SettlementStatus" element={<SettlementStatusSelect />} />
        <Route path="/SettlerCheckLogin" element={<SettlerCheckLogin />} />
        <Route path="/SingleSettlerStatus" element={<SingleSettlerStatus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


