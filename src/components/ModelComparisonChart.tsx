import { useState } from "react";
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { metricOptions, modelPerformance } from "../data/researchData";
import type { ModelMetric } from "../types/research";

export function ModelComparisonChart() {
  const [metric, setMetric] = useState<ModelMetric>("rmse");
  const selected = metricOptions.find((option) => option.key === metric);

  return (
    <div className="comparison-panel">
      <div className="comparison-controls">
        <div>
          <p className="mini-label">Evaluation metric</p>
          <p className="lower-note">Lower is better for every metric shown.</p>
        </div>
        <div className="metric-selector" role="group" aria-label="Select model comparison metric">
          {metricOptions.map((option) => (
            <button
              key={option.key}
              type="button"
              className={metric === option.key ? "active" : ""}
              aria-pressed={metric === option.key}
              onClick={() => setMetric(option.key)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      <div className="chart-frame chart-medium" role="img" aria-label={`${selected?.label ?? metric} comparison across four forecasting models`}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={modelPerformance} margin={{ top: 16, right: 16, left: 0, bottom: 18 }}>
            <CartesianGrid stroke="#dce7e8" strokeDasharray="3 5" vertical={false} />
            <XAxis dataKey="model" tickLine={false} axisLine={{ stroke: "#b9cacc" }} interval={0} tick={{ fontSize: 11 }} />
            <YAxis tickLine={false} axisLine={false} width={50} />
            <Tooltip
              formatter={(value) => [metric === "mape" ? `${value}%` : Number(value).toFixed(2), selected?.label]}
              contentStyle={{ borderRadius: 12, border: "1px solid #d5e1e2" }}
            />
            <Bar dataKey={metric} radius={[7, 7, 0, 0]} isAnimationActive={false}>
              {modelPerformance.map((entry) => (
                <Cell key={entry.model} fill={entry.best ? "#087f8c" : "#b8cbcd"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
