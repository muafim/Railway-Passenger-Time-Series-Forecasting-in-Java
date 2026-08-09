import { ArrowDown } from "lucide-react";
import { research } from "../data/researchData";

const metadata = [
  ["Region", "Java"],
  ["Period", "2014-2024"],
  ["Frequency", research.frequency],
  ["Observations", String(research.observations)],
  ["Best model", research.bestModel],
];

export function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-lines" aria-hidden="true" />
      <div className="shell hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Research dashboard · Java, Indonesia</p>
          <h1>{research.title}</h1>
          <p className="hero-subtitle">{research.subtitle}</p>
          <p className="hero-description">{research.description}</p>
          <a className="primary-button" href="#overview">
            Explore analysis <ArrowDown size={17} aria-hidden="true" />
          </a>
        </div>
        <aside className="hero-meta" aria-label="Research summary">
          {metadata.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </aside>
      </div>
    </header>
  );
}
