import CommonPage from "../components/CommonPage";
import { useState } from "react";

function MyDownlineTree() {
  const [gotoId, setGotoId] = useState("");

  return (
    <CommonPage title="My Downline">
      <div style={{ padding: "20px" }}>
        <h1
          style={{
            fontSize: "55px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          My Downline
        </h1>

        <div
          style={{
            fontSize: "30px",
            marginBottom: "30px",
          }}
        >
          •
        </div>

        {/* Table */}
        <div
          style={{
            width: "100%",
            maxWidth: "1050px",
            border: "1px solid #ddd",
            marginBottom: "30px",
            overflowX: "auto",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              background: "#f5f5f5",
            }}
          >
            <tbody>
              <tr>
                <td style={cellStyle}>Name</td>
                <td style={valueStyle}>NAMRATA . JADHAV</td>
                <td style={cellStyle}>Joining Date</td>
                <td style={valueStyle}>08-May-2026</td>
              </tr>

              <tr>
                <td style={cellStyle}>Total Left Count</td>
                <td style={valueStyle}>0</td>
                <td style={cellStyle}>Total Right Count</td>
                <td style={valueStyle}>0</td>
              </tr>

              <tr>
                <td style={cellStyle}>Left PV</td>
                <td style={valueStyle}>0</td>
                <td style={cellStyle}>Right PV</td>
                <td style={valueStyle}>0</td>
              </tr>

              <tr>
                <td style={cellStyle}>Left Match</td>
                <td style={valueStyle}>0</td>
                <td style={cellStyle}>Right Match</td>
                <td style={valueStyle}>0</td>
              </tr>

              <tr>
                <td style={cellStyle}>Left Balance</td>
                <td style={valueStyle}>0</td>
                <td style={cellStyle}>Right Balance</td>
                <td style={valueStyle}>0</td>
              </tr>

              <tr>
                <td style={cellStyle}>Goto ID</td>

                <td style={cellStyle}>
                  <input
                    type="text"
                    value={gotoId}
                    onChange={(e) => setGotoId(e.target.value)}
                    style={{
                      width: "90%",
                      height: "35px",
                    }}
                  />
                </td>

                <td style={cellStyle}>
                  <button>Search</button>
                </td>

                <td style={cellStyle}>
                  <button>Goto Top</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tree Image Area */}
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            background: "#fff",
            border: "1px solid #ddd",
            padding: "30px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              color: "#1e73ff",
              marginBottom: "20px",
            }}
          >
            SP1328136
          </h3>

          <div
            style={{
              fontSize: "80px",
              marginBottom: "20px",
            }}
          >
            🔥
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "40px",
            }}
          >
            <div>
              <p style={{ color: "#1e73ff" }}>Blank</p>
              <div style={{ fontSize: "80px" }}>👤</div>
            </div>

            <div>
              <p style={{ color: "#1e73ff" }}>Blank</p>
              <div style={{ fontSize: "80px" }}>👤</div>
            </div>
          </div>
        </div>
      </div>
    </CommonPage>
  );
}

const cellStyle = {
  border: "1px solid #ddd",
  padding: "18px",
  fontSize: "18px",
};

const valueStyle = {
  border: "1px solid #ddd",
  padding: "18px",
  fontSize: "18px",
  color: "orangered",
};

export default MyDownlineTree;