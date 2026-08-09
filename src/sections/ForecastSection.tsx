import { SectionHeader } from "../components/SectionHeader";
import { forecast2025, sourceNotes } from "../data/researchData";

export function ForecastSection() {
  return (
    <section id="forecast" className="section section-white">
      <div className="shell">
        <SectionHeader
          eyebrow="05 · Forecast"
          title={forecast2025.title}
          description="The research used Seasonal ARIMA to project railway passenger volume for the following twelve months."
        />
        <div className="forecast-layout">
          <figure className="notebook-figure">
            <img src={`${import.meta.env.BASE_URL}forecast-2025.png`} alt={forecast2025.imageAlt} />
            <figcaption>{sourceNotes.forecast}</figcaption>
          </figure>
          <div className="forecast-insight">
            <p className="mini-label">Research interpretation</p>
            <h3>Upward tendency with recurring seasonality</h3>
            <p>{forecast2025.insight}</p>
            <p>{forecast2025.context}</p>
            <div className="integrity-note">
              <strong>Data integrity note</strong>
              <span>No numeric monthly 2025 table is displayed because the exact values were not retained in the notebook output.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
