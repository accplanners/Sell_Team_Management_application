// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Layout";

// function Home() {
//   return <h2>Home Page ✅</h2>;
// }

// function Purchase() {
//   return <h2>Purchase Page ✅</h2>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="purchase" element={<Purchase />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Layout from "./Layout";
// import Home from "./pages/Home";
// import Purchase from "./pages/Purchase";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="purchase" element={<Purchase />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";

import Home from "./pages/Home";
// import Purchase from "./pages/Purchase";
import Registration from "./pages/Registration";
import MyPins from "./pages/MyPins";
import UsedPins from "./pages/UsedPins";
import EPinRequest from "./pages/EPinRequest";
import PinTransfer from "./pages/PinTransfer";
import SendPin from "./pages/SendPin";
import ReceivedPin from "./pages/ReceivedPin";
import Transactions from "./pages/Transactions";
import Personal from "./pages/Personal";
import Downline from "./pages/Downline";
import Logout from "./pages/Logout";
import IncomeBetweenDates from "./pages/IncomeBetweenDates";
import VouchersBetweenDates from "./pages/VouchersBetweenDates";
import AgentDirectPurchase from "./pages/AgentDirectPurchase";
// import Logout from "./pages/Login";

function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />

          {/* <Route path="purchase" element={<Purchase />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}

          <Route path="registration" element={<Registration />} />

          <Route path="mypins" element={<MyPins />} />

          <Route path="usedpins" element={<UsedPins />} />

          <Route path="epinrequest" element={<EPinRequest />} />

          <Route path="pintransfer" element={<PinTransfer />} />

          <Route path="sendpin" element={<SendPin />} />

          <Route path="receivedpin" element={<ReceivedPin />} />

          <Route path="transactions" element={<Transactions />} />

          <Route path="personal" element={<Personal />} />

          <Route path="downline" element={<Downline />} />

          <Route path="logout" element={<Logout />} />
          
          <Route path="/income" element={<IncomeBetweenDates />} />

          <Route path="/vouchers" element={<VouchersBetweenDates />}/>
          
          <Route path="/agent-direct-purchase" element={<AgentDirectPurchase />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;