import { MetricCard } from "../components/MetricCard";
import { SectionHeader } from "../components/SectionHeader";
import { descriptiveStats, research, researchObjectives } from "../data/researchData";

const integerFormatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

export function Overview() {
  return (
    <section id="overview" className="section section-white">
      <div className="shell">
        <SectionHeader
          eyebrow="01 · Research overview"
          title="A decade of monthly passenger movement"
          description="The study uses an existing BPS dataset and saved notebook outputs. This dashboard presents the research results; it does not retrain or run forecasting models."
        />

        <div className="overview-grid">
          <div className="objective-list">
            <p className="mini-label">Research objectives</p>
            {researchObjectives.map((objective, index) => (
              <article key={objective} className="objective-item">
                <span>0{index + 1}</span>
                <p>{objective}</p>
              </article>
            ))}
          </div>
          <div className="dataset-card">
            <p className="mini-label">Dataset overview</p>
            <dl className="dataset-list">
              <div><dt>Data source</dt><dd>{research.source}</dd></div>
              <div><dt>Region</dt><dd>{research.region}</dd></div>
              <div><dt>Period</dt><dd>{research.period}</dd></div>
              <div><dt>Frequency</dt><dd>{research.frequency}</dd></div>
              <div><dt>Train / test</dt><dd>{research.trainingPeriod} ({research.trainingObservations}) / {research.testingPeriod} ({research.testingObservations})</dd></div>
            </dl>
          </div>
        </div>

        <div className="kpi-grid" aria-label="Key descriptive statistics">
          <MetricCard label="Observations" value={String(descriptiveStats.count)} detail="monthly records" />
          <MetricCard label="Average passengers" value={integerFormatter.format(descriptiveStats.mean)} detail="per month" />
          <MetricCard label="Minimum" value={integerFormatter.format(descriptiveStats.minimum)} detail="monthly passengers" />
          <MetricCard label="Maximum" value={integerFormatter.format(descriptiveStats.maximum)} detail="monthly passengers" />
        </div>

        <div className="stats-strip">
          <span><small>Std. deviation</small>{integerFormatter.format(descriptiveStats.standardDeviation)}</span>
          <span><small>25th percentile</small>{integerFormatter.format(descriptiveStats.q1)}</span>
          <span><small>Median</small>{integerFormatter.format(descriptiveStats.median)}</span>
          <span><small>75th percentile</small>{integerFormatter.format(descriptiveStats.q3)}</span>
        </div>
      </div>
    </section>
  );
}
