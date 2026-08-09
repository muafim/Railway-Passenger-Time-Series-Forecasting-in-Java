import { SectionHeader } from "../components/SectionHeader";
import { StationarityCard } from "../components/StationarityCard";
import { adfTests, correlationSummary, research, stationarityHypotheses } from "../data/researchData";

export function StationarityAnalysis() {
  return (
    <section id="stationarity" className="section section-white">
      <div className="shell">
        <SectionHeader
          eyebrow="03 · Stationarity analysis"
          title="Augmented Dickey-Fuller test"
          description="The ADF test tracks how differencing changes the stationarity evidence before ARIMA modelling."
        />
        <div className="hypothesis-bar">
          <span>{stationarityHypotheses.null}</span>
          <span>{stationarityHypotheses.alternative}</span>
          <span>α = {research.alpha}</span>
        </div>
        <div className="stationarity-grid">
          {adfTests.map((test, index) => <StationarityCard key={test.stage} test={test} index={index} />)}
        </div>

        <div className="correlation-section">
          <div>
            <p className="eyebrow">ACF & PACF</p>
            <h3>Lag structure after differencing</h3>
            <p className="section-description">The report's saved interpretation is summarized here without recomputing the correlation functions.</p>
          </div>
          <article>
            <h4>Autocorrelation (ACF)</h4>
            <ul>{correlationSummary.acf.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article>
            <h4>Partial autocorrelation (PACF)</h4>
            <ul>{correlationSummary.pacf.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <div className="correlation-conclusion">
            <span>Research conclusion</span>
            <strong>{correlationSummary.conclusion}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
