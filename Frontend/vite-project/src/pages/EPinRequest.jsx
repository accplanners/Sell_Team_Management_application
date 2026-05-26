import "./EPinRequest.css";

function EPinRequest() {

  const currentDateTime = new Date().toLocaleString();

  return (

    <div className="epin-page">

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

        <h1>Pin Request</h1>

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

          <select>

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

        {/* NUMBER OF PINS */}

        <div className="form-group">

          <label>No.Of Pin</label>

          <input
            type="text"
            placeholder="Enter No.Of Pins"
          />

        </div>

        {/* PACKAGE AMOUNT */}

        <div className="form-group">

          <label>Package Amount.</label>

          <input
            type="text"
            value="1800.00"
            readOnly
          />

        </div>

        {/* TOTAL AMOUNT */}

        <div className="form-group">

          <label>Total Amount.</label>

          <input
            type="text"
            value="0"
            readOnly
          />

        </div>

        {/* PAYMENT DETAILS */}

        <div className="form-group">

          <label>Payment Details</label>

          <textarea
            placeholder="Enter Payment Details"
          />

        </div>

        {/* UPLOAD RECEIPT */}

        <div className="form-group">

          <label>Upload Receipt</label>

          <div className="upload-row">

            <input type="file" />

            <button className="upload-btn">
              Upload
            </button>

          </div>

        </div>

        {/* RECEIPT */}

        <div className="form-group">

          <label>Receipt</label>

        </div>

        {/* BUTTONS */}

        <div className="button-row">

          <button className="submit-btn">
            Submit
          </button>

          <button className="clear-btn">
            Clear
          </button>

        </div>

      </div>

    </div>
  );
}

export default EPinRequest;