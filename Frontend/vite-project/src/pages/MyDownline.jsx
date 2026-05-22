import CommonPage from "../components/CommonPage";
import { useState } from "react";

function MyDownLine() {
  const [type, setType] = useState("All");

  return (
    <CommonPage title="My DownLine">
      <div style={{ padding: "20px" }}>
        <h1
          style={{
            fontSize: "50px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          My downLine
        </h1>

        <div
          style={{
            fontSize: "30px",
            marginBottom: "30px",
          }}
        >
          •
        </div>

        <div
          style={{
            width: "250px",
            marginBottom: "40px",
          }}
        >
          <label
            style={{
              display: "block",
              marginBottom: "10px",
              fontSize: "20px",
            }}
          >
            Type
          </label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            style={{
              width: "100%",
              height: "45px",
              padding: "0 10px",
              fontSize: "18px",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            <option value="All">All</option>
            <option value="Left">Left</option>
            <option value="Right">Right</option>
          </select>
        </div>

        <h3
          style={{
            fontSize: "22px",
            fontWeight: "700",
          }}
        >
          You Have no Members
        </h3>
      </div>
    </CommonPage>
  );
}

export default MyDownLine;