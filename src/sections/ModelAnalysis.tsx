import { ModelComparisonChart } from "../components/ModelComparisonChart";
import { SectionHeader } from "../components/SectionHeader";
import { modelPerformance } from "../data/researchData";

export function ModelAnalysis() {
  return (
    <section id="models" className="section section-tint">
      <div className="shell">
        <SectionHeader
          eyebrow="04 · Model analysis"
          title="Four ARIMA-based models evaluated"
          description="Performance is compared using the official values reported in the research presentation and primary notebook."
        />
        <ModelComparisonChart />

        <div className="table-wrap">
          <table>
            <caption className="sr-only">Forecasting model performance comparison</caption>
            <thead><tr><th>Model</th><th>AIC</th><th>RMSE</th><th>MAE</th><th>MAPE</th></tr></thead>
            <tbody>
              {modelPerformance.map((model) => (
                <tr key={model.model} className={model.best ? "best-row" : ""}>
                  <th scope="row">
                    {model.model}
                    {model.best ? <span className="best-badge">Best model</span> : null}
                  </th>
                  <td>{model.aic.toFixed(3)}</td>
                  <td>{model.rmse.toFixed(2)}</td>
                  <td>{model.mae.toFixed(2)}</td>
                  <td>{model.mape}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <aside className="research-insight">
          <p className="mini-label">Why Seasonal ARIMA performed best</p>
          <p>Seasonal ARIMA produced the lowest AIC, RMSE, MAE, and MAPE in this dataset. The research attributes this result to its ability to capture the seasonal structure in monthly railway passenger volume.</p>
        </aside>
      </div>
    </section>
  );
}
