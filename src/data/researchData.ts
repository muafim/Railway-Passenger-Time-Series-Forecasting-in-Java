import type {
  AdfTest,
  ModelMetric,
  ModelPerformance,
  TimeSeriesPoint,
  ValidationPoint,
} from "../types/research";

export const research = {
  title: "Railway Passenger Time Series Forecasting",
  subtitle: "Analisis Deret Waktu Jumlah Penumpang Kereta Api di Jawa, 2014-2024",
  description:
    "A time-series study of railway passenger volume in Java, examining long-term trends and seasonality while comparing ARIMA-based forecasting models.",
  source: "Badan Pusat Statistik (BPS)",
  region: "Java (Jabodetabek + Non-Jabodetabek aggregate)",
  period: "January 2014 - December 2024",
  frequency: "Monthly",
  observations: 132,
  trainingPeriod: "2014-2023",
  trainingObservations: 120,
  testingPeriod: "2024",
  testingObservations: 12,
  bestModel: "Seasonal ARIMA",
  bestSpecification: "SARIMAX(1,1,1) × (1,1,1,12)",
  alpha: 0.05,
};

export const researchObjectives = [
  "Understand the movement patterns and long-term trend in railway passenger volume.",
  "Compare ARIMA and Seasonal ARIMA methods for passenger forecasting.",
  "Forecast passenger volume for the following year using the best evaluated model.",
];

export const descriptiveStats = {
  count: 132,
  mean: 26860.89,
  standardDeviation: 8287.35,
  minimum: 5476,
  q1: 22902.5,
  median: 28874.5,
  q3: 33818,
  maximum: 38303,
};

const yearlyPassengers: Record<number, number[]> = {
  2014: [20698, 19628, 22427, 21502, 22547, 23415, 22125, 22763, 23219, 24503, 23986, 25791],
  2015: [24254, 22394, 26841, 26150, 27450, 27118, 27077, 27351, 27125, 28280, 27253, 29328],
  2016: [27886, 26058, 28156, 28000, 30176, 28730, 28216, 29125, 29019, 29765, 29178, 31530],
  2017: [30359, 26837, 31612, 30934, 33157, 30181, 33669, 33255, 31921, 34498, 33798, 36140],
  2018: [34107, 30721, 35272, 35135, 34877, 32270, 36089, 34560, 33878, 35602, 34637, 37197],
  2019: [34435, 31282, 35068, 35106, 34514, 34261, 38303, 34542, 34615, 35814, 35228, 36710],
  2020: [33472, 31679, 22949, 5813, 5476, 9272, 12205, 12679, 11295, 11768, 13523, 13262],
  2021: [11631, 11223, 13995, 14590, 14627, 14313, 5646, 6479, 9510, 13139, 15161, 17207],
  2022: [17499, 12857, 19133, 19436, 23114, 23160, 25272, 23920, 25167, 27143, 26473, 29245],
  2023: [28435, 25744, 29249, 27731, 29886, 29579, 32372, 30742, 31067, 33108, 32424, 34500],
  2024: [33590, 31397, 32277, 34241, 34665, 34524, 37422, 35292, 34792, 37233, 34849, 37537],
};

export const historicalPassengers: TimeSeriesPoint[] = Object.entries(yearlyPassengers).flatMap(
  ([year, values]) =>
    values.map((passengers, monthIndex) => ({
      date: `${year}-${String(monthIndex + 1).padStart(2, "0")}`,
      passengers,
    })),
);

export const trendInsights = [
  "Passenger volume generally increased from 2014 through early 2020.",
  "A sharp decline occurred during the COVID-19 pandemic period.",
  "Passenger volume recovered significantly after the disruption.",
  "Seasonal patterns became visible again in the post-pandemic period.",
];

export const adfTests: AdfTest[] = [
  {
    stage: "Original",
    label: "Original Series",
    statistic: -1.7859895262998111,
    pValue: 0.3874393541604581,
    status: "Not Stationary",
    stationary: false,
    interpretation: "p-value > 0.05, so the test fails to reject H0.",
  },
  {
    stage: "First difference",
    label: "First Differencing",
    statistic: -2.713098648419045,
    pValue: 0.07179892849052212,
    status: "Still Not Stationary at α = 0.05",
    stationary: false,
    interpretation: "The series approaches stationarity, but the p-value remains above 0.05.",
  },
  {
    stage: "Second difference",
    label: "Second Differencing",
    statistic: -5.889938268833992,
    pValue: 2.940647054598914e-7,
    status: "Stationary",
    stationary: true,
    interpretation: "The p-value is far below 0.05, so H0 is rejected.",
  },
];

export const stationarityHypotheses = {
  null: "H0: The series is not stationary.",
  alternative: "H1: The series is stationary.",
};

export const correlationSummary = {
  acf: [
    "The first lag shows a strong relationship.",
    "Correlation falls sharply after the first lag.",
    "After differencing, no strong long-term correlation remains.",
  ],
  pacf: [
    "The first lag shows a strong direct relationship.",
    "Values fall sharply after the first lag.",
  ],
  conclusion: "AR(1) is a relevant candidate based on these patterns.",
};

export const modelPerformance: ModelPerformance[] = [
  { model: "ARIMA (1,2,1)", aic: 2232.286, rmse: 2122.87, mae: 1831.81, mape: 5 },
  { model: "ARIMA (1,1,1)", aic: 2236.663, rmse: 1868.47, mae: 1413.43, mape: 4 },
  { model: "Auto ARIMA", aic: 2232.736, rmse: 1860.97, mae: 1400.75, mape: 4 },
  {
    model: "Seasonal ARIMA",
    specification: "SARIMAX(1,1,1) × (1,1,1,12)",
    aic: 2018.594,
    rmse: 1200.97,
    mae: 945.61,
    mape: 3,
    best: true,
  },
];

export const metricOptions: { key: ModelMetric; label: string }[] = [
  { key: "aic", label: "AIC" },
  { key: "rmse", label: "RMSE" },
  { key: "mae", label: "MAE" },
  { key: "mape", label: "MAPE" },
];

const validationActual = [33590, 31397, 32277, 34241, 34665, 34524, 37422, 35292, 34792, 37233, 34849, 37537];
const validationPredicted = [34674.685014, 32340.233662, 34990.101188, 33227.085091, 34529.395952, 34212.052546, 35466.043914, 34701.113643, 34870.632558, 36512.303006, 36204.804374, 37979.058915];
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const validation2024: ValidationPoint[] = monthNames.map((month, index) => ({
  month,
  actual: validationActual[index],
  predicted: validationPredicted[index],
}));

export const bestModelMetrics = {
  aic: 2018.594,
  rmse: 1200.97,
  mae: 945.61,
  mape: 3,
};

export const residualDiagnostics = [
  {
    test: "Durbin-Watson",
    value: 1.9822051859966048,
    interpretation:
      "A value very close to 2 indicates no strong residual autocorrelation under the study's interpretation.",
  },
  {
    test: "Shapiro-Wilk",
    value: 0.7603116922252471,
    pValue: 1.0247701243988584e-12,
    interpretation: "p-value < 0.05, so the residuals do not satisfy the normality assumption.",
  },
];

export const forecast2025 = {
  title: "Passenger Forecast 2025",
  insight:
    "The Seasonal ARIMA forecast indicates an upward tendency in railway passenger volume in Java during 2025, with a recurring seasonal pattern.",
  context:
    "The study relates this pattern to periods such as holidays, homecoming travel, and seasonal economic activity. Exact monthly values were not printed in the saved notebook output.",
  imageAlt: "Notebook chart showing actual 2024, forecast 2024, and Seasonal ARIMA forecast for 2025",
};

export const conclusions = [
  {
    title: "Long-Term Trend",
    text: "Passenger volume showed a general upward tendency from 2014 through early 2020.",
  },
  {
    title: "Pandemic Disruption",
    text: "A major decline occurred during the COVID-19 pandemic period, followed by a significant recovery.",
  },
  {
    title: "Seasonality",
    text: "Passenger volume displays seasonal components during particular periods.",
  },
  {
    title: "Best Forecasting Model",
    text: "Seasonal ARIMA achieved the lowest AIC, RMSE, MAE, and MAPE among the evaluated models.",
  },
];

export const futureResearch = [
  "Use daily passenger data to examine seasonal patterns in greater detail.",
  "Develop SARIMAX models with external variables.",
  "Evaluate Prophet, XGBoost, and LSTM as alternative approaches.",
];

export const operationalRecommendations = [
  "Consider additional services during seasonal demand periods.",
  "Optimize passenger capacity.",
  "Improve digital ticketing and schedule information services.",
];

export const sourceNotes = {
  validation:
    "The plotted 2024 forecast path is taken from the supplementary notebook's saved output. Official performance metrics use the report and primary notebook.",
  forecast:
    "The 2025 view is the saved notebook visualization. The notebook does not retain a verifiable numeric monthly table for 2025.",
};
