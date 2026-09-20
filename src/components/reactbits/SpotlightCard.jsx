import { useState } from "react";

export function SpotlightCard({ children, className = "", spotlightColor = "rgba(74, 85, 104, .18)" }) {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  return <div className={`spotlight-card ${className}`} style={{ "--spotlight-color": spotlightColor, "--spotlight-x": `${position.x}%`, "--spotlight-y": `${position.y}%` }} onPointerMove={(event) => { const bounds = event.currentTarget.getBoundingClientRect(); setPosition({ x: ((event.clientX - bounds.left) / bounds.width) * 100, y: ((event.clientY - bounds.top) / bounds.height) * 100 }); }}>{children}</div>;
}
