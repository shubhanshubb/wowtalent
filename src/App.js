import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard.jsx';
import WowUsers from './Pages/WowUsers.jsx';
import VideoClips from './Pages/VideoClips.jsx';
import ReportedContent from './Pages/ReportedContent.jsx';
import Category from './Pages/Category.jsx';
import InfoPage from './Pages/InfoPage.jsx';
import Faq from './Pages/Faq.jsx';
import PushNotification from './Pages/PushNotification.jsx';
import InternalUser from './Pages/InternalUser.jsx';
import ExplicitContent from './Pages/ExplicitContent.jsx';
import FeedbackMessages from './Pages/FeedbackMessages.jsx';
import Kyc from './Pages/Kyc.jsx';
import CoinWithdrawal from './Pages/CoinWithdrawal.jsx';
import CoinPurchased from './Pages/CoinPurchased.jsx';
import CoinTransfer from './Pages/CoinTransfer.jsx';
import CoinEarning from './Pages/CoinEarning.jsx';
import UsersDeleted from './Pages/UsersDeleted.jsx';
import UsersFeedbacks from './Pages/UsersFeedbacks.jsx';


const App = () => {
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/wow users" element={<WowUsers />} />
      <Route path="/video clips" element={<VideoClips />} />
      <Route path="/ReportedContent" element={<ReportedContent />} />
      <Route path="/category" element={<Category />} />
      <Route path="/InfoPage" element={<InfoPage />} />
      <Route path="/Faq" element={<Faq />} />
      <Route path="/PushNotification" element={<PushNotification />} />
      <Route path="/InternalUser" element={<InternalUser />} />
      <Route path="/InternalUser" element={<InternalUser />} />
      <Route path="/ExplicitContent" element={<ExplicitContent />} />
      <Route path="/FeedbackMessages" element={<FeedbackMessages />} />
      <Route path="/Kyc" element={<Kyc />} />
      <Route path="/CoinWithdrawal" element={<CoinWithdrawal />} />
      <Route path="/CoinPurchased" element={<CoinPurchased />} />
      <Route path="/CoinTransfer" element={<CoinTransfer />} />
      <Route path="/CoinEarning" element={<CoinEarning />} />
      <Route path="/UsersDeleted" element={<UsersDeleted />} />
      <Route path="/UsersFeedbacks" element={<UsersFeedbacks />} />
      
    </Routes>
    </Sidebar>
    </BrowserRouter>
  );
}

export default App;
