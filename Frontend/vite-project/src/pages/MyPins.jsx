import "./UsedPins.css";
import { FaCalendarAlt } from "react-icons/fa";

function UsedPins() {

  const currentDateTime = new Date().toLocaleString();

  return (
    <div className="pins-page">

      <div className="top-row">

        <div className="left-content">

          <p className="welcome-text">
            Welcome to Sparsh Cares!
          </p>

          <p className="date-time">
            {currentDateTime}
          </p>

        </div>

        <button className="import-btn">
          Import
        </button>

      </div>

      <div className="title-section">
        <h1>Unused Pins</h1>
      </div>

      <div className="form-section">

        <div className="filter-row">

          <label>From date</label>

          <div className="input-box">

            <input type="date" />

            <FaCalendarAlt className="calendar-icon" />

          </div>

        </div>

        <div className="filter-row">

          <label>To Date</label>

          <div className="input-box">

            <input type="date" />

            <FaCalendarAlt className="calendar-icon" />

          </div>

        </div>

        <button className="show-btn">
          Show
        </button>

      </div>

    </div>
  );
}

export default UsedPins;