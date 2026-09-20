import { useRef } from "react";

export function LogoLoop({ logos, speed = 34, pauseOnHover = true }) {
  const trackRef = useRef(null);
  const items = [...logos, ...logos];
  return <div className={`logo-loop ${pauseOnHover ? "logo-loop-pause" : ""}`} style={{ "--logo-loop-duration": `${speed}s` }}><div ref={trackRef} className="logo-loop-track">{items.map((logo, index) => <div className="logo-loop-item" key={`${logo.name}-${index}`}><img src={logo.logoPath} alt={logo.alt} /></div>)}</div></div>;
}
