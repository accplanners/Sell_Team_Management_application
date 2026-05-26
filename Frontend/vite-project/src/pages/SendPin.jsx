import "./SendPin.css";
import { FaCalendarAlt, FaHeart } from "react-icons/fa";

function SendPin() {

  const currentDateTime =
    new Date().toLocaleString();

  return (

    <div className="sendpin-page">

      {/* TOP BAR */}

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

      {/* TITLE */}

      <div className="title-section">

        <h1>Send Pin Between Dates</h1>

      </div>

      {/* DOT */}

      <div className="dot-row">
        •
      </div>

      {/* FORM */}

      <div className="form-container">

        {/* FROM DATE */}

        <div className="field-group">

          <label>From date</label>

          <div className="date-box">

            <input type="date" />

            <FaCalendarAlt className="calendar-icon" />

          </div>

        </div>

        {/* TO DATE */}

        <div className="field-group">

          <label>To Date</label>

          <div className="date-box">

            <input type="date" />

            <FaCalendarAlt className="calendar-icon" />

          </div>

        </div>

        {/* REPORT TYPE */}

        <div className="field-group">

          <label>Report Type</label>

          <div className="radio-row">

            <label className="radio-label">

              <input
                type="radio"
                name="report"
                defaultChecked
              />

              PDF

            </label>

            <label className="radio-label">

              <input
                type="radio"
                name="report"
              />

              Excel

            </label>

          </div>

        </div>

        {/* SHOW BUTTON */}

        <button className="show-btn">
          Show
        </button>

      </div>

      {/* FOOTER */}

      <div className="footer">

        <p className="copyright">
          Copyright © 2025 . All rights reserved.
        </p>

        <p className="made">
          Hand-crafted & made with
          <FaHeart className="heart" />
        </p>

      </div>

    </div>
  );
}

export default SendPin;