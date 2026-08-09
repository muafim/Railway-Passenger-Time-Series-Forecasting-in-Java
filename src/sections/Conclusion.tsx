import { SectionHeader } from "../components/SectionHeader";
import { conclusions, futureResearch, operationalRecommendations } from "../data/researchData";

export function Conclusion() {
  return (
    <section id="conclusion" className="section section-tint">
      <div className="shell">
        <SectionHeader
          eyebrow="06 · Research conclusion"
          title="What the analysis found"
          description="The findings below reflect the conclusions stated in the research report."
        />
        <div className="conclusion-grid">
          {conclusions.map((item, index) => (
            <article key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="recommendations-grid">
          <article>
            <p className="eyebrow">Future research</p>
            <h3>Extend the modelling scope</h3>
            <ul>{futureResearch.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article>
            <p className="eyebrow">Operational insight</p>
            <h3>Plan for seasonal demand</h3>
            <ul>{operationalRecommendations.map((item) => <li key={item}>{item}</li>)}</ul>
            <small>These are research recommendations, not official operational instructions.</small>
          </article>
        </div>
      </div>
    </section>
  );
}
