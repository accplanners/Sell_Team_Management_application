import CommonPage from "../components/CommonPage";

function MyDirect() {
  return (
    <CommonPage title="My Direct">
      <div style={{ padding: "15px" }}>
        {/* Header Card */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #ddd",
            padding: "35px",
            marginBottom: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "45px",
              fontWeight: "700",
            }}
          >
            My Direct
          </h1>
        </div>

        {/* Table Card */}
        <div
          style={{
            background: "#fff",
            border: "1px solid #ddd",
            padding: "35px",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "400",
            }}
          >
            Striped Table
          </h2>
        </div>
      </div>
    </CommonPage>
  );
}

export default MyDirect;