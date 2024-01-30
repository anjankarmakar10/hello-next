"use client";
import React, { useState } from "react";

function Censored({ children }) {
  const [isCensored, setIsConsored] = useState(false);

  return (
    <button
      className={isCensored ? "censored" : undefined}
      onClick={() => setIsConsored((prev) => !prev)}
    >
      {children}
    </button>
  );
}

export default Censored;
