import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { validation2024 } from "../data/researchData";

const numberFormatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

export function ValidationChart() {
  return (
    <div className="chart-frame chart-medium" role="img" aria-label="Actual monthly passengers compared with Seasonal ARIMA predictions for 2024">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={validation2024} margin={{ top: 12, right: 18, left: 4, bottom: 4 }}>
          <CartesianGrid stroke="#dce7e8" strokeDasharray="3 5" vertical={false} />
          <XAxis dataKey="month" tickLine={false} axisLine={{ stroke: "#b9cacc" }} />
          <YAxis tickFormatter={(value: number) => `${Math.round(value / 1000)}k`} width={44} tickLine={false} axisLine={false} domain={[30000, 39000]} />
          <Tooltip
            formatter={(value, name, item) => {
              const label = name === "actual" ? "Actual" : "Forecast";
              const difference = item.payload.actual - item.payload.predicted;
              return [`${numberFormatter.format(Number(value))}${name === "predicted" ? ` · difference ${numberFormatter.format(difference)}` : ""}`, label];
            }}
            contentStyle={{ borderRadius: 12, border: "1px solid #d5e1e2" }}
          />
          <Legend formatter={(value) => (value === "actual" ? "Actual 2024" : "SARIMA forecast")} />
          <Line type="monotone" dataKey="actual" stroke="#087f8c" strokeWidth={2.5} dot={{ r: 3 }} isAnimationActive={false} />
          <Line type="monotone" dataKey="predicted" stroke="#e47b42" strokeWidth={2.5} strokeDasharray="6 5" dot={{ r: 3 }} isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
