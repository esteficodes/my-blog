"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Global error caught:", error);
  }, [error]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Try Again
      </button>
    </div>
  );
}
