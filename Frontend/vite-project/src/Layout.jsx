import { useState } from "react";
import { Outlet, Link,  useNavigate } from "react-router-dom";

import "./layout.css";

import {
  FaBars,
  FaSearch,
  FaHome,
  FaShoppingCart,
  FaUserPlus,
  FaChevronDown,
  FaChevronRight,
  FaMoneyCheckAlt,
  FaUser,
  FaUsers,
  FaSignOutAlt,
  FaWallet,
  FaBell,
  FaEllipsisV,
  FaKey,
  FaFileAlt,
  FaIdCard,
} from "react-icons/fa";

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [showEPins, setShowEPins] = useState(false);
  const [showTransactions, setShowTransactions] = useState(false);
  const [showPersonal, setShowPersonal] = useState(false);
  const [showDownline, setShowDownline] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    // Remove stored login data
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  
    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="layout">
      {/* SIDEBAR */}
      <div className={sidebarOpen ? "sidebar open" : "sidebar closed"}>
        {/* LOGO */}
        <div className="logo">
          <img
            src="/icons/branner.png"
            alt="logo"
          />

          {sidebarOpen && <h2>Sparsh Care</h2>}
        </div>

        {/* DASHBOARD */}
        <Link to="/" className="menu-item">
          <div className="left">
            <FaHome />
            {sidebarOpen && <span>Dashboard</span>}
          </div>
        </Link>

        {/* PURCHASE */}
        {/* <Link to="/purchase" className="menu-item">
          <div className="left">
            <FaShoppingCart />
            {sidebarOpen && <span>Purchase</span>}
          </div>
        </Link> */}

        {/* REGISTRATION */}
        <Link to="/registration" className="menu-item">
          <div className="left">
            <FaUserPlus />
            {sidebarOpen && <span>Registration</span>}
          </div>
        </Link>

        {/* E-PINS */}
        <div
          className="menu-item dropdown"
          onClick={() => setShowEPins(!showEPins)}
        >
          <div className="left">
            <FaWallet />

            {sidebarOpen && <span>E-Pins</span>}
          </div>

          {sidebarOpen && (
            <div className="arrow">
              {showEPins ? <FaChevronDown /> : <FaChevronRight />}
            </div>
          )}
        </div>

        {showEPins && sidebarOpen && (
          <div className="submenu">
            <Link to="/mypins">My Pins</Link>

            <Link to="/usedpins">Used Pins</Link>

            <Link to="/epinrequest">E-Pin Request</Link>

            <Link to="/pintransfer">Pin Transfer</Link>

            <Link to="/sendpin">Send Pin</Link>

            <Link to="/receivedpin">Received Pin</Link>
          </div>
        )}

        {/* TRANSACTIONS */}
        {/* <Link to="/transactions" className="menu-item">
          <div className="left">
            <FaMoneyCheckAlt />

            {sidebarOpen && <span>My Transactions</span>}
          </div>
        </Link> */}
        <div
          className="menu-item dropdown"
          onClick={() => setShowTransactions(!showTransactions)}
        >
          <div className="left">
            <FaMoneyCheckAlt />

            {sidebarOpen && <span>My Transactions</span>}
          </div>

          {sidebarOpen && (
            <div className="arrow">
              {showTransactions ? <FaChevronDown /> : <FaChevronRight />}
            </div>
          )}
        </div>

        {showTransactions && sidebarOpen && (
          <div className="submenu">
            <Link to="/income">Income Wallet</Link>

            <Link to="/vouchers">Income Voucher</Link>

            <Link to="/agent-direct-purchase">My Purchase</Link>
          </div>
        )}

        {/* PERSONAL */}
        <div
          className="menu-item dropdown"
          onClick={() => setShowPersonal(!showPersonal)}
        >
          <div className="left">
            <FaUser />

            {sidebarOpen && <span>Personal</span>}
          </div>

          {sidebarOpen && (
            <div className="arrow">
              {showPersonal ? <FaChevronDown /> : <FaChevronRight />}
            </div>
          )}
        </div>

        {showPersonal && sidebarOpen && (
          <div className="submenu">
            <Link to="/editprofile">
              <FaIdCard />
              <span>Edit Profile</span>
            </Link>

            <Link to="/changepassword">
              <FaKey />
              <span>Change Password</span>
            </Link>

            <Link to="/welcomeletter">
              <FaFileAlt />
              <span>Welcome Letter</span>
            </Link>
          </div>
        )}

        {/* DOWNLINE */}
        <div
          className="menu-item dropdown"
          onClick={() => setShowDownline(!showDownline)}
        >
          <div className="left">
            <FaUsers />

            {sidebarOpen && <span>Downline</span>}
          </div>

          {sidebarOpen && (
            <div className="arrow">
              {showDownline ? <FaChevronDown /> : <FaChevronRight />}
            </div>
          )}
        </div>

        {showDownline && sidebarOpen && (
          <div className="submenu">
            <Link to="/treeview">
              <FaIdCard />
              <span>Tree View</span>
            </Link>

            <Link to="/mypoints">
              <FaKey />
              <span>My Points</span>
            </Link>

            <Link to="/mydirect">
              <FaFileAlt />
              <span>My Direct</span>
            </Link>
            <Link to="/mydownline">
              <FaFileAlt />
              <span>My Downline</span>
            </Link>
            <Link to="/downlinereport">
              <FaFileAlt />
              <span>Downline Report</span>
            </Link>

          </div>
        )}
        {/* LOGOUT */}
        <div className="menu-item" onClick={handleLogout}>
          <div className="left">
            <FaSignOutAlt />
            {sidebarOpen && <span>Logout</span>}
          </div>
        </div>

      </div>

      {/* MAIN */}
      <div className="main">
        {/* NAVBAR */}
        <div className="navbar">
          <div className="nav-left">
            <FaBars
              className="menu-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            />

            <FaSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search..."
            />
          </div>

          <div className="nav-right">
            <FaBell className="top-icon" />

            <div className="profile">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="profile"
              />

              <span>NAMRATA . JADHAV (SP1328136)</span>
            </div>

            <FaEllipsisV className="top-icon" />
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;