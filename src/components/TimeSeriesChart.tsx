import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceArea,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { historicalPassengers } from "../data/researchData";

const numberFormatter = new Intl.NumberFormat("en-US");

export function TimeSeriesChart() {
  return (
    <div className="chart-frame chart-large" role="img" aria-label="Monthly railway passengers in Java from 2014 to 2024, showing growth, a sharp pandemic-period decline, and recovery">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={historicalPassengers} margin={{ top: 16, right: 18, left: 4, bottom: 6 }}>
          <CartesianGrid stroke="#dce7e8" strokeDasharray="3 5" vertical={false} />
          <XAxis
            dataKey="date"
            tickFormatter={(value: string) => value.slice(0, 4)}
            interval={11}
            minTickGap={18}
            tickLine={false}
            axisLine={{ stroke: "#b9cacc" }}
          />
          <YAxis
            tickFormatter={(value: number) => `${Math.round(value / 1000)}k`}
            width={44}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            labelFormatter={(label) => String(label)}
            formatter={(value) => [numberFormatter.format(Number(value)), "Passengers"]}
            contentStyle={{ borderRadius: 12, border: "1px solid #d5e1e2", boxShadow: "0 12px 32px rgba(15,42,51,.12)" }}
          />
          <ReferenceArea
            x1="2020-03"
            x2="2021-12"
            fill="#e47b42"
            fillOpacity={0.1}
            strokeOpacity={0}
            label={{ value: "COVID-19 disruption", fill: "#9a4c28", fontSize: 11, position: "insideTop" }}
          />
          <Line
            type="monotone"
            dataKey="passengers"
            stroke="#087f8c"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 4, fill: "#087f8c", stroke: "white", strokeWidth: 2 }}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
