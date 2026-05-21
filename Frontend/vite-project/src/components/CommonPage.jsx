import { useEffect, useState } from "react";
import "./common.css";

function CommonPage({ title, children }) {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const formatted = now.toLocaleString("en-US", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });

      setCurrentDateTime(formatted);
    };

    updateDateTime();

    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container">
      {/* HEADER */}
      <div className="top-card">
        <div>
          <h1>Welcome to Sparsh Cares!</h1>
          <h2>{currentDateTime}</h2>
        </div>

        <button className="import-btn">Import</button>
      </div>

      {/* CONTENT */}
      <div className="content-section">
        <h1 className="page-title">{title}</h1>

        <div className="dot">•</div>

        {children}
      </div>

      {/* FOOTER */}
      <div className="footer">
        <p>Copyright © 2026 . All rights reserved.</p>

        <p>
          Hand-crafted & made with <span>❤️</span>
        </p>
      </div>
    </div>
  );
}

export default CommonPage;