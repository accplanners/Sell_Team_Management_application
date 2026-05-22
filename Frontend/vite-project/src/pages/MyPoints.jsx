import CommonPage from "../components/CommonPage";
import { useState } from "react";

function VouchersBetweenDates() {
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
    <CommonPage title="Vouchers Between Dates">
      <div
        style={{
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "45px",
            fontWeight: "700",
            marginBottom: "30px",
          }}
        >
          Agent Between Dates
        </h1>

        <div
          style={{
            width: "100%",
            maxWidth: "400px",
          }}
        >
          {/* From Date */}
          <div
            style={{
              marginBottom: "30px",
            }}
          >
            <label
              style={{
                display: "block",
                marginBottom: "10px",
                fontSize: "18px",
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
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #999",
                borderRadius: "4px",
              }}
            />
          </div>

          {/* To Date */}
          <div
            style={{
              marginBottom: "30px",
            }}
          >
            <label
              style={{
                display: "block",
                marginBottom: "10px",
                fontSize: "18px",
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
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #999",
                borderRadius: "4px",
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
                fontSize: "18px",
              }}
            >
              Report Type
            </label>

            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
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
                  gap: "5px",
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

          {/* Button */}
          <button
            onClick={handleShow}
            style={{
              backgroundColor: "#3f4f97",
              color: "#fff",
              border: "none",
              padding: "14px 40px",
              borderRadius: "40px",
              fontSize: "22px",
              cursor: "pointer",
            }}
          >
            Show
          </button>
        </div>
      </div>
    </CommonPage>
  );
}

export default VouchersBetweenDates;