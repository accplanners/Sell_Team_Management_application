import "./PinTransfer.css";

function PinTransfer() {

  const currentDateTime =
    new Date().toLocaleString();

  return (

    <div className="transfer-page">

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

        <h1>Pin Transfer</h1>

      </div>

      {/* DOT */}

      <div className="dot-row">
        •
      </div>

      {/* FORM */}

      <div className="form-section">

        {/* PACKAGE */}

        <div className="form-group">

          <label>Select Package</label>

          <select defaultValue="">
            
            <option value="" disabled>
              Select Package
            </option>
            
            <option>
              Sanitary 1800 Pack
            </option>

            <option>
              Sanitary 6600 Pack
            </option>

            <option>
              Sanitary 3900 Pack
            </option>

          </select>

        </div>

        {/* SHOW BUTTON */}

        <button className="show-btn">
          Show
        </button>

        {/* AGENT ID */}

        <div className="form-group">

          <label>
            Enter New AgentID
          </label>

          <input
            type="text"
            placeholder="Enter Agent ID"
          />

        </div>

        {/* AGENT NAME */}

        <div className="form-group">

          <label>
            Agent Name
          </label>

          <input
            type="text"
            placeholder="Agent Name"
          />

        </div>

        {/* BUTTONS */}

        <div className="button-row">

          <button className="transfer-btn">
            Transfer Pin
          </button>

          <button className="clear-btn">
            Clear
          </button>

        </div>

      </div>

    </div>
  );
}

export default PinTransfer;