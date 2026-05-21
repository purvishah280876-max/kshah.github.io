import React from "react";

// Subtle decorative SVG charts that resemble the original cards
const color = "hsl(22 45% 65% / 0.55)";
const colorStrong = "hsl(22 55% 50% / 0.85)";

export const BarsChart = () => (
  <svg viewBox="0 0 200 80" className="w-full h-[88px]">
    {[20, 50, 35, 60, 30].map((h, i) => (
      <rect key={i} x={20 + i * 32} y={80 - h} width={20} height={h} rx={3} fill={i === 1 ? colorStrong : color} />
    ))}
  </svg>
);

export const Bars2Chart = () => (
  <svg viewBox="0 0 200 80" className="w-full h-[88px]">
    {[40, 32, 50, 28].map((h, i) => (
      <rect key={i} x={30 + i * 38} y={80 - h} width={26} height={h} rx={3} fill={i === 2 ? colorStrong : color} />
    ))}
  </svg>
);

export const FlowChart = () => (
  <svg viewBox="0 0 200 80" className="w-full h-[88px]">
    <circle cx="40" cy="40" r="10" fill={color} />
    <line x1="50" y1="40" x2="82" y2="40" stroke={colorStrong} strokeWidth="2" />
    <rect x="82" y="30" width="20" height="20" rx="3" fill={color} />
    <line x1="102" y1="40" x2="134" y2="40" stroke={colorStrong} strokeWidth="2" />
    <rect x="134" y="30" width="20" height="20" rx="3" fill={color} />
    <line x1="154" y1="40" x2="178" y2="40" stroke={colorStrong} strokeWidth="2" markerEnd="url(#arrow)" />
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={colorStrong} />
      </marker>
    </defs>
  </svg>
);

export const DonutChart = () => (
  <svg viewBox="0 0 200 80" className="w-full h-[88px]">
    <circle cx="100" cy="40" r="24" fill="none" stroke={color} strokeWidth="10" />
    <circle cx="100" cy="40" r="24" fill="none" stroke={colorStrong} strokeWidth="10"
      strokeDasharray="60 100" strokeDashoffset="0" transform="rotate(-90 100 40)" strokeLinecap="round" />
  </svg>
);

const ProjectChart = ({ kind }) => {
  switch (kind) {
    case "bars": return <BarsChart />;
    case "bars2": return <Bars2Chart />;
    case "flow": return <FlowChart />;
    case "donut": return <DonutChart />;
    default: return <BarsChart />;
  }
};

export default ProjectChart;
