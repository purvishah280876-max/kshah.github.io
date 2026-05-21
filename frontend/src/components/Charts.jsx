import React from "react";

const RUST = "hsl(22 55% 50%)";
const RUST_L = "hsl(22 45% 70%)";
const STONE = "hsl(30 18% 75%)";
const INK_L = "hsl(24 12% 35%)";

// ---------- Layout helpers ----------
const Frame = ({ title, takeaway, children, expandable = true }) => (
  <div className="border border-border rounded-xl p-5 bg-card card-lift">
    <div className="flex items-start justify-between gap-3">
      <div className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">{title}</div>
    </div>
    <div className="mt-3">{children}</div>
    {takeaway && (
      <p className="mt-3 text-[12.5px] text-rust">— {takeaway}</p>
    )}
  </div>
);

// ---------- Charts ----------
export const BarChart = ({ data, takeaway, title = "Bar chart" }) => {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <Frame title={title} takeaway={takeaway}>
      <svg viewBox="0 0 320 160" className="w-full h-[160px]">
        {data.map((d, i) => {
          const w = 280 / data.length - 8;
          const h = (d.value / max) * 110;
          const x = 20 + i * (w + 8);
          return (
            <g key={i}>
              <rect x={x} y={140 - h} width={w} height={h} rx={3} fill={i % 2 ? RUST_L : RUST} />
              <text x={x + w / 2} y={155} fontSize="9" fill={INK_L} textAnchor="middle">{d.name}</text>
            </g>
          );
        })}
        <line x1="10" y1="140" x2="310" y2="140" stroke={STONE} />
      </svg>
    </Frame>
  );
};

export const HorizontalBarChart = ({ data, takeaway, title = "Horizontal bars" }) => {
  const max = Math.max(...data.map((d) => d.value));
  const rowH = 18;
  const height = data.length * rowH + 16;
  return (
    <Frame title={title} takeaway={takeaway}>
      <svg viewBox={`0 0 320 ${height}`} className="w-full" style={{ height }}>
        {data.map((d, i) => {
          const w = (d.value / max) * 200;
          return (
            <g key={i}>
              <text x="0" y={i * rowH + 14} fontSize="9.5" fill={INK_L}>{d.name}</text>
              <rect x="100" y={i * rowH + 4} width={w} height={11} rx={2} fill={RUST} opacity={1 - i * 0.05} />
              <text x={100 + w + 4} y={i * rowH + 13} fontSize="9" fill={INK_L}>{d.value}</text>
            </g>
          );
        })}
      </svg>
    </Frame>
  );
};

export const GroupedBarChart = ({ groups, series, takeaway, title = "Grouped bars" }) => {
  // groups: [{name, values: [a,b,c]}]; series: ["Budget","Mid","Premium"]
  const max = Math.max(...groups.flatMap((g) => g.values));
  const colors = [RUST, RUST_L, STONE];
  const gw = 280 / groups.length;
  const barW = (gw - 12) / series.length;
  return (
    <Frame title={title} takeaway={takeaway}>
      <svg viewBox="0 0 320 180" className="w-full h-[180px]">
        {groups.map((g, gi) => (
          <g key={gi}>
            {g.values.map((v, si) => {
              const h = (v / max) * 110;
              const x = 20 + gi * gw + 4 + si * barW;
              return <rect key={si} x={x} y={140 - h} width={barW - 2} height={h} rx={2} fill={colors[si % 3]} />;
            })}
            <text x={20 + gi * gw + gw / 2} y={155} fontSize="9" fill={INK_L} textAnchor="middle">{g.name}</text>
          </g>
        ))}
        <line x1="10" y1="140" x2="310" y2="140" stroke={STONE} />
        {series.map((s, i) => (
          <g key={s} transform={`translate(${20 + i * 70}, 168)`}>
            <rect width="8" height="8" fill={colors[i % 3]} rx="1" />
            <text x="12" y="7" fontSize="9" fill={INK_L}>{s}</text>
          </g>
        ))}
      </svg>
    </Frame>
  );
};

export const StackedBarChart = ({ groups, series, takeaway, title = "Stacked bars" }) => {
  const totals = groups.map((g) => g.values.reduce((a, b) => a + b, 0));
  const max = Math.max(...totals);
  const colors = [RUST, RUST_L, STONE];
  const gw = 260 / groups.length;
  return (
    <Frame title={title} takeaway={takeaway}>
      <svg viewBox="0 0 320 180" className="w-full h-[180px]">
        {groups.map((g, gi) => {
          let yCursor = 140;
          const x = 30 + gi * gw + 6;
          const w = gw - 14;
          return (
            <g key={gi}>
              {g.values.map((v, si) => {
                const h = (v / max) * 110;
                yCursor -= h;
                return <rect key={si} x={x} y={yCursor} width={w} height={h} fill={colors[si % 3]} />;
              })}
              <text x={x + w / 2} y={155} fontSize="9" fill={INK_L} textAnchor="middle">{g.name}</text>
            </g>
          );
        })}
        <line x1="10" y1="140" x2="310" y2="140" stroke={STONE} />
        {series.map((s, i) => (
          <g key={s} transform={`translate(${20 + i * 70}, 168)`}>
            <rect width="8" height="8" fill={colors[i % 3]} rx="1" />
            <text x="12" y="7" fontSize="9" fill={INK_L}>{s}</text>
          </g>
        ))}
      </svg>
    </Frame>
  );
};

export const LineChart = ({ series, xLabels, takeaway, title = "Line chart" }) => {
  // series: [{name, values:[]}]
  const all = series.flatMap((s) => s.values);
  const max = Math.max(...all);
  const colors = [RUST, RUST_L, STONE];
  const w = 280;
  const stepX = w / (xLabels.length - 1);
  return (
    <Frame title={title} takeaway={takeaway}>
      <svg viewBox="0 0 320 180" className="w-full h-[180px]">
        <line x1="20" y1="140" x2="310" y2="140" stroke={STONE} />
        {series.map((s, si) => {
          const path = s.values
            .map((v, i) => {
              const x = 20 + i * stepX;
              const y = 140 - (v / max) * 110;
              return `${i === 0 ? "M" : "L"} ${x} ${y}`;
            })
            .join(" ");
          return (
            <g key={si}>
              <path d={path} fill="none" stroke={colors[si % 3]} strokeWidth="2" />
              {s.values.map((v, i) => (
                <circle key={i} cx={20 + i * stepX} cy={140 - (v / max) * 110} r="3" fill={colors[si % 3]} />
              ))}
            </g>
          );
        })}
        {xLabels.map((l, i) => (
          <text key={i} x={20 + i * stepX} y="155" fontSize="9" fill={INK_L} textAnchor="middle">{l}</text>
        ))}
        {series.map((s, i) => (
          <g key={s.name} transform={`translate(${20 + i * 70}, 168)`}>
            <rect width="8" height="8" fill={colors[i % 3]} rx="1" />
            <text x="12" y="7" fontSize="9" fill={INK_L}>{s.name}</text>
          </g>
        ))}
      </svg>
    </Frame>
  );
};

export const ScatterChart = ({ points, takeaway, title = "Scatter plot" }) => (
  <Frame title={title} takeaway={takeaway}>
    <svg viewBox="0 0 320 180" className="w-full h-[180px]">
      <line x1="20" y1="140" x2="310" y2="140" stroke={STONE} />
      <line x1="20" y1="20" x2="20" y2="140" stroke={STONE} />
      {points.map(([x, y], i) => (
        <circle key={i} cx={20 + x * 2.7} cy={140 - y} r={5} fill={i % 3 === 0 ? RUST : RUST_L} opacity={0.75} />
      ))}
    </svg>
  </Frame>
);

export const TreemapChart = ({ takeaway, title = "Treemap" }) => (
  <Frame title={title} takeaway={takeaway}>
    <svg viewBox="0 0 320 180" className="w-full h-[180px]">
      <rect x="4" y="4" width="170" height="120" fill={RUST} rx="3" />
      <text x="14" y="24" fill="white" fontSize="11" fontWeight="600">Top 10</text>
      <rect x="178" y="4" width="138" height="70" fill={RUST_L} rx="3" />
      <text x="186" y="22" fill="white" fontSize="10">Brands 11–50</text>
      <rect x="178" y="78" width="70" height="46" fill={STONE} rx="3" />
      <text x="184" y="96" fill={INK_L} fontSize="9">Long tail</text>
      <rect x="252" y="78" width="64" height="46" fill={RUST_L} opacity="0.6" rx="3" />
      <rect x="4" y="128" width="312" height="48" fill={STONE} opacity="0.55" rx="3" />
      <text x="14" y="155" fill={INK_L} fontSize="10">Mid-tier &amp; emerging brands</text>
    </svg>
  </Frame>
);

export const DonutChart = ({ data, takeaway, title = "Donut" }) => {
  // data: [{name, value}]
  const total = data.reduce((a, b) => a + b.value, 0);
  const colors = [RUST, RUST_L, STONE, "hsl(24 12% 35%)"];
  let offset = 0;
  const C = 2 * Math.PI * 42;
  return (
    <Frame title={title} takeaway={takeaway}>
      <div className="flex items-center gap-6">
        <svg viewBox="0 0 120 120" className="w-[140px] h-[140px]">
          <circle cx="60" cy="60" r="42" fill="none" stroke={STONE} strokeWidth="14" opacity="0.3" />
          {data.map((d, i) => {
            const len = (d.value / total) * C;
            const el = (
              <circle key={i} cx="60" cy="60" r="42" fill="none"
                stroke={colors[i % colors.length]} strokeWidth="14"
                strokeDasharray={`${len} ${C - len}`} strokeDashoffset={-offset}
                transform="rotate(-90 60 60)" strokeLinecap="butt" />
            );
            offset += len;
            return el;
          })}
        </svg>
        <ul className="text-[12px] space-y-1.5">
          {data.map((d, i) => (
            <li key={d.name} className="flex items-center gap-2 text-muted-foreground">
              <span className="inline-block w-2.5 h-2.5 rounded-sm" style={{ background: colors[i % colors.length] }} />
              <span className="text-foreground">{d.name}</span>
              <span>· {Math.round((d.value / total) * 100)}%</span>
            </li>
          ))}
        </ul>
      </div>
    </Frame>
  );
};

export const Heatmap = ({ rows, cols, matrix, takeaway, title = "Heatmap" }) => {
  const max = Math.max(...matrix.flat());
  return (
    <Frame title={title} takeaway={takeaway}>
      <div className="overflow-x-auto">
        <table className="text-[11px] w-full">
          <thead>
            <tr>
              <th></th>
              {cols.map((c) => (
                <th key={c} className="px-2 py-1 text-muted-foreground font-normal text-center">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r}>
                <td className="pr-3 py-1 text-muted-foreground whitespace-nowrap">{r}</td>
                {matrix[i].map((v, j) => {
                  const t = v / max;
                  const bg = `hsl(22 55% ${65 - t * 25}% / ${0.25 + t * 0.6})`;
                  return (
                    <td key={j} className="p-0">
                      <div className="m-1 h-9 rounded flex items-center justify-center text-[11px] text-foreground/80"
                        style={{ background: bg }}>{v}</div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center gap-2 mt-3 text-[10px] text-muted-foreground">
          <span>Low</span>
          <span className="inline-block w-24 h-2 rounded" style={{ background: "linear-gradient(to right, hsl(22 55% 70% / 0.25), hsl(22 55% 45% / 0.85))" }} />
          <span>High responsiveness</span>
        </div>
      </div>
    </Frame>
  );
};

export const RadarChart = ({ axes, series, takeaway, title = "Radar" }) => {
  // axes:["Habit","Impulse",...] ; series: [{name, values:[0-100]}]
  const cx = 100, cy = 95, r = 70;
  const n = axes.length;
  const angle = (i) => -Math.PI / 2 + (i * 2 * Math.PI) / n;
  const colors = [RUST, RUST_L, STONE];
  const polyForValues = (vals) =>
    vals
      .map((v, i) => {
        const rr = (v / 100) * r;
        return `${cx + rr * Math.cos(angle(i))},${cy + rr * Math.sin(angle(i))}`;
      })
      .join(" ");
  return (
    <Frame title={title} takeaway={takeaway}>
      <svg viewBox="0 0 200 180" className="w-full h-[180px]">
        {[0.25, 0.5, 0.75, 1].map((s, i) => (
          <polygon key={i}
            points={axes.map((_, j) => `${cx + s * r * Math.cos(angle(j))},${cy + s * r * Math.sin(angle(j))}`).join(" ")}
            fill="none" stroke={STONE} opacity="0.5" />
        ))}
        {axes.map((a, i) => (
          <g key={a}>
            <line x1={cx} y1={cy} x2={cx + r * Math.cos(angle(i))} y2={cy + r * Math.sin(angle(i))} stroke={STONE} opacity="0.5" />
            <text x={cx + (r + 10) * Math.cos(angle(i))} y={cy + (r + 10) * Math.sin(angle(i)) + 3}
              fontSize="9" fill={INK_L} textAnchor="middle">{a}</text>
          </g>
        ))}
        {series.map((s, i) => (
          <polygon key={s.name} points={polyForValues(s.values)} fill={colors[i % 3]} opacity="0.35" stroke={colors[i % 3]} strokeWidth="1.5" />
        ))}
      </svg>
      <div className="flex flex-wrap gap-3 mt-2">
        {series.map((s, i) => (
          <span key={s.name} className="text-[11px] text-muted-foreground flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm inline-block" style={{ background: colors[i % 3] }} />
            {s.name}
          </span>
        ))}
      </div>
    </Frame>
  );
};
