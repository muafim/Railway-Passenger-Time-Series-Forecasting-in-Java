import { Check } from "lucide-react";
import { MetricCard } from "../components/MetricCard";
import { ValidationChart } from "../components/ValidationChart";
import { bestModelMetrics, research, residualDiagnostics, sourceNotes } from "../data/researchData";

export function BestModel() {
  return (
    <section className="section best-model-section" aria-labelledby="best-model-title">
      <div className="shell">
        <div className="best-model-heading">
          <div>
            <p className="eyebrow light">Best performing model</p>
            <h2 id="best-model-title">{research.bestModel}</h2>
            <p className="model-spec">{research.bestSpecification}</p>
          </div>
          <p><Check size={19} aria-hidden="true" /> Lowest forecasting error among the evaluated models</p>
        </div>
        <div className="best-metrics">
          <MetricCard label="AIC" value={bestModelMetrics.aic.toFixed(3)} />
          <MetricCard label="RMSE" value={bestModelMetrics.rmse.toFixed(2)} />
          <MetricCard label="MAE" value={bestModelMetrics.mae.toFixed(2)} />
          <MetricCard label="MAPE" value={`${bestModelMetrics.mape}%`} />
        </div>
        <p className="best-description">Seasonal ARIMA gave the lowest forecasting errors and captured the annual seasonal pattern in the monthly series.</p>

        <div className="validation-panel">
          <div className="validation-copy">
            <p className="eyebrow">Model validation</p>
            <h3>Actual vs forecast — 2024</h3>
            <p>The holdout period contains 12 monthly observations. Solid and dashed lines distinguish actual values from the saved SARIMA forecast.</p>
            <p className="source-note">{sourceNotes.validation}</p>
          </div>
          <ValidationChart />
        </div>

        <div className="diagnostics-block">
          <div>
            <p className="eyebrow light">Residual diagnostics</p>
            <h3>Important model checks</h3>
          </div>
          {residualDiagnostics.map((diagnostic) => (
            <article key={diagnostic.test}>
              <span>{diagnostic.test}</span>
              <strong>{diagnostic.value}</strong>
              {diagnostic.pValue ? <small>p-value: {diagnostic.pValue.toExponential(6)}</small> : null}
              <p>{diagnostic.interpretation}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
