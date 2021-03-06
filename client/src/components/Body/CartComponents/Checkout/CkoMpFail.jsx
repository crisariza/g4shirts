import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CkoMpFail() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label style={{ fontSize: "4em", margin: "1em" }}>
        Something went wrong with your shopping.
      </label>
      <Link to="/">
        <button
          style={{
            backgroundColor: "#ff7b06",
            color: "white",
            border: "none",
            fontSize: "1.5em",
            width: "10em",
          }}
        >
          Go back to the home.
        </button>
      </Link>
    </div>
  );
}
