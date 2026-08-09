import { Navbar } from "./components/Navbar";
import { BestModel } from "./sections/BestModel";
import { Conclusion } from "./sections/Conclusion";
import { ForecastSection } from "./sections/ForecastSection";
import { Hero } from "./sections/Hero";
import { HistoricalTrend } from "./sections/HistoricalTrend";
import { ModelAnalysis } from "./sections/ModelAnalysis";
import { Overview } from "./sections/Overview";
import { StationarityAnalysis } from "./sections/StationarityAnalysis";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <HistoricalTrend />
        <StationarityAnalysis />
        <ModelAnalysis />
        <BestModel />
        <ForecastSection />
        <Conclusion />
      </main>
      <footer>
        <div className="shell footer-inner">
          <p>Railway Passenger Time Series Forecasting</p>
          <p>Static research dashboard · Data source: BPS · Research period: 2014-2024</p>
        </div>
      </footer>
    </>
  );
}
