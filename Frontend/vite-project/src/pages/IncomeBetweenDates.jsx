import CommonPage from "../components/CommonPage";

function IncomeBetweenDates() {
  return (
    <CommonPage title="Income Beetween Dates">
      <div className="form-container">
        <div className="form-group">
          <label>From date</label>
          <input type="date" />
        </div>

        <div className="form-group">
          <label>To Date</label>
          <input type="date" />
        </div>

        <div className="form-group">
          <label>Income</label>

          <select>
            <option>Select</option>
            <option>Income 1</option>
            <option>Income 2</option>
          </select>
        </div>

        <div className="form-group">
          <label>Report Type</label>

          <div className="radio-group">
            <input type="radio" name="report" /> PDF

            <input type="radio" name="report" /> Excel
          </div>
        </div>

        <button className="show-btn">Show</button>
      </div>
    </CommonPage>
  );
}

export default IncomeBetweenDates;