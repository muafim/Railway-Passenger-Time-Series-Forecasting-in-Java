import { CheckCircle2, CircleAlert } from "lucide-react";
import type { AdfTest } from "../types/research";

interface StationarityCardProps {
  test: AdfTest;
  index: number;
}

export function StationarityCard({ test, index }: StationarityCardProps) {
  return (
    <article className={`stationarity-card ${test.stationary ? "stationary" : ""}`}>
      <div className="step-heading">
        <span className="step-index">0{index + 1}</span>
        {test.stationary ? <CheckCircle2 size={20} aria-hidden="true" /> : <CircleAlert size={20} aria-hidden="true" />}
      </div>
      <p className="step-stage">{test.stage}</p>
      <h3>{test.label}</h3>
      <dl>
        <div><dt>ADF statistic</dt><dd>{test.statistic}</dd></div>
        <div><dt>p-value</dt><dd>{test.pValue.toExponential(6)}</dd></div>
      </dl>
      <p className="status-label">{test.status}</p>
      <p className="card-note">{test.interpretation}</p>
    </article>
  );
}
