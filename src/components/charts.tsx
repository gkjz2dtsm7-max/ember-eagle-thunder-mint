import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function ChartFrame({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  if (!ready) return <div className="h-full w-full rounded-md bg-foam" />;
  return <>{children}</>;
}

export function EconomyChart({
  data,
}: {
  data: { year: number; visitor: number; wages: number }[];
}) {
  return (
    <ChartFrame>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
          <CartesianGrid stroke="#c9d6ce" strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" tick={{ fill: "#5a6b61", fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#5a6b61", fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: 12, border: "1px solid #c9d6ce", fontSize: 12 }}
            formatter={(value, name) => [
              `$${value}M`,
              name === "visitor" ? "Visitor spending (est.)" : "Wages supported",
            ]}
          />
          <Line type="monotone" dataKey="visitor" stroke="#1b4332" strokeWidth={2.4} dot={{ r: 3, fill: "#1b4332" }} />
          <Line type="monotone" dataKey="wages" stroke="#8aa090" strokeWidth={2.2} dot={{ r: 3, fill: "#8aa090" }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}

export function SeriesChart({
  data,
  dataKey,
  color = "#1b4332",
  unit = "",
}: {
  data: Record<string, number | string>[];
  dataKey: string;
  color?: string;
  unit?: string;
}) {
  return (
    <ChartFrame>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
          <CartesianGrid stroke="#c9d6ce" strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="year" tick={{ fill: "#5a6b61", fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: "#5a6b61", fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: 12, border: "1px solid #c9d6ce", fontSize: 12 }}
            formatter={(value) => [`${value}${unit}`, ""]}
          />
          <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2.6} dot={{ r: 4, fill: color }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}
