import { useEffect, useRef, useState } from "react";

export function ShapeGrid({ speed = 0.5, squareSize = 40, direction = "diagonal", borderColor = "#1E293B", hoverFillColor = "#3B4B63", shape = "square", hoverTrailAmount = 2 }) {
  const gridRef = useRef(null);
  const [grid, setGrid] = useState({ columns: 0, rows: 0 });
  const [activeCells, setActiveCells] = useState([]);

  useEffect(() => {
    const element = gridRef.current;
    if (!element) return undefined;
    const resize = () => {
      const bounds = element.getBoundingClientRect();
      setGrid({ columns: Math.ceil(bounds.width / squareSize), rows: Math.ceil(bounds.height / squareSize) });
    };
    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(element);
    return () => observer.disconnect();
  }, [squareSize]);

  const handlePointerMove = (event) => {
    const bounds = gridRef.current.getBoundingClientRect();
    const column = Math.floor((event.clientX - bounds.left) / squareSize);
    const row = Math.floor((event.clientY - bounds.top) / squareSize);
    const cells = [];
    for (let offset = 0; offset <= hoverTrailAmount; offset += 1) {
      const nextColumn = direction === "diagonal" ? column - offset : column;
      const nextRow = direction === "diagonal" ? row - offset : row;
      if (nextColumn >= 0 && nextRow >= 0 && nextColumn < grid.columns && nextRow < grid.rows) cells.push(`${nextColumn}:${nextRow}`);
    }
    setActiveCells(cells);
  };

  const cells = Array.from({ length: grid.columns * grid.rows }, (_, index) => {
    const column = index % grid.columns;
    const row = Math.floor(index / grid.columns);
    const active = activeCells.includes(`${column}:${row}`);
    return <span className={`shape-grid-cell ${shape === "circle" ? "shape-grid-circle" : ""} ${active ? "shape-grid-active" : ""}`} key={`${column}:${row}`} style={{ "--shape-grid-border": borderColor, "--shape-grid-hover": hoverFillColor }} />;
  });

  return <div ref={gridRef} className="shape-grid" onPointerMove={handlePointerMove} onPointerLeave={() => setActiveCells([])} style={{ "--shape-grid-size": `${squareSize}px`, "--shape-grid-speed": `${Math.max(speed, 0.1)}s` }} aria-hidden="true">{cells}</div>;
}
