"use client";
import { useState } from "react";

function Revealable({ children }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      {isShown ? (
        <>{children}</>
      ) : (
        <div className="reveal">
          <button onClick={() => setIsShown(true)}>Reveal Content</button>
        </div>
      )}
    </>
  );
}

export default Revealable;
