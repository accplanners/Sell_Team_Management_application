<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
>>>>>>> 9dc6041 (Completed frontend mypins and downline)

import Layout from "./Layout";

import MyPins from "./pages/MyPins";
import UsedPins from "./pages/UsedPins";
import EPinRequest from "./pages/EPinRequest";
import PinTransfer from "./pages/PinTransfer";
import SendPin from "./pages/SendPin";
import ReceivedPin from "./pages/ReceivedPin";
<<<<<<< HEAD
import Logout from "./pages/Logout";
import IncomeBetweenDates from "./pages/IncomeBetweenDates";
import VouchersBetweenDates from "./pages/VouchersBetweenDates";
import AgentDirectPurchase from "./pages/AgentDirectPurchase";
import DownlineReport from "./pages/DownlineReport"
import MyDirect from "./pages/MyDirect"
import MyDownline from "./pages/MyDownline";
import MyPoints from "./pages/MyPoints"
import Treeview from "./pages/Treeview";

// import Logout from "./pages/Login";

=======
>>>>>>> 9dc6041 (Completed frontend mypins and downline)
function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>

          <Route path="/mypins" element={<MyPins />} />

          <Route path="/usedpins" element={<UsedPins />} />
          <Route path="/epinrequest" element={<EPinRequest />} />
          <Route path="pintransfer" element={<PinTransfer />} />
          <Route path="sendpin" element={<SendPin />} />
<<<<<<< HEAD

          <Route path="receivedpin" element={<ReceivedPin />} />

          <Route path="logout" element={<Logout />} />

          <Route path="treeview" element={<Treeview />} />
          
          <Route path="income" element={<IncomeBetweenDates />} />

          <Route path="vouchers" element={<VouchersBetweenDates />}/>
          
          <Route path="agent-direct-purchase" element={<AgentDirectPurchase />} />

          <Route path="mypoints" element={<MyPoints />} />

          <Route path="mydownline" element={<MyDownline />} />

          <Route path="mydirect" element={<MyDirect />} />

          <Route path="downlinereport" element={<DownlineReport />} />
=======
          <Route path="receivedpin" element={<ReceivedPin/>} />
>>>>>>> 9dc6041 (Completed frontend mypins and downline)
        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;