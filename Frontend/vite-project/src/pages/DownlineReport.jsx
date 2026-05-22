import CommonPage from "../components/CommonPage";
import { useState } from "react";

function DownlineReport() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reportType, setReportType] = useState("PDF");

  const handleShow = () => {
    console.log({
      fromDate,
      toDate,
      reportType,
    });
  };

  return (
    <CommonPage title="Downline Report">
      <div
        style={{
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            fontWeight: "700",
            marginBottom: "40px",
          }}
        >
          Agent Between Dates
        </h1>

        {/* From Date */}
        <div
          style={{
            width: "350px",
            marginBottom: "30px",
          }}
        >
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              fontSize: "20px",
            }}
          >
            From Date
          </label>

          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            style={{
              width: "100%",
              height: "45px",
              padding: "0 10px",
              fontSize: "16px",
              border: "1px solid #999",
              borderRadius: "5px",
            }}
          />
        </div>

        {/* To Date */}
        <div
          style={{
            width: "350px",
            marginBottom: "30px",
          }}
        >
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              fontSize: "20px",
            }}
          >
            To Date
          </label>

          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            style={{
              width: "100%",
              height: "45px",
              padding: "0 10px",
              fontSize: "16px",
              border: "1px solid #999",
              borderRadius: "5px",
            }}
          />
        </div>

        {/* Report Type */}
        <div
          style={{
            marginBottom: "40px",
          }}
        >
          <label
            style={{
              display: "block",
              marginBottom: "15px",
              fontSize: "20px",
            }}
          >
            Report Type
          </label>

          <div
            style={{
              display: "flex",
              gap: "25px",
              alignItems: "center",
            }}
          >
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "18px",
              }}
            >
              <input
                type="radio"
                value="PDF"
                checked={reportType === "PDF"}
                onChange={(e) => setReportType(e.target.value)}
              />
              PDF
            </label>

            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "18px",
              }}
            >
              <input
                type="radio"
                value="Excel"
                checked={reportType === "Excel"}
                onChange={(e) => setReportType(e.target.value)}
              />
              Excel
            </label>
          </div>
        </div>

        {/* Show Button */}
        <button
          onClick={handleShow}
          style={{
            backgroundColor: "#44549d",
            color: "#fff",
            border: "none",
            padding: "14px 45px",
            borderRadius: "40px",
            fontSize: "22px",
            cursor: "pointer",
          }}
        >
          Show
        </button>
      </div>
    </CommonPage>
  );
}

export default DownlineReport;