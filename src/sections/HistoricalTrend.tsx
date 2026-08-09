import { TimeSeriesChart } from "../components/TimeSeriesChart";
import { SectionHeader } from "../components/SectionHeader";
import { trendInsights } from "../data/researchData";

export function HistoricalTrend() {
  return (
    <section id="trend" className="section section-tint">
      <div className="shell">
        <SectionHeader
          eyebrow="02 · Historical trend"
          title="Passenger volume, January 2014 to December 2024"
          description="Monthly passenger totals for the Java aggregate used in the research: Jabodetabek and Non-Jabodetabek."
        />
        <TimeSeriesChart />
        <div className="insight-row" aria-label="Historical trend findings">
          {trendInsights.map((insight, index) => (
            <div key={insight}>
              <span>{index + 1}</span>
              <p>{insight}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
