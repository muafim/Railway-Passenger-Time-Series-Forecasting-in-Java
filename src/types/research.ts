export interface TimeSeriesPoint {
  date: string;
  passengers: number;
}

export interface AdfTest {
  stage: string;
  label: string;
  statistic: number;
  pValue: number;
  status: string;
  stationary: boolean;
  interpretation: string;
}

export type ModelMetric = "aic" | "rmse" | "mae" | "mape";

export interface ModelPerformance {
  model: string;
  specification?: string;
  aic: number;
  rmse: number;
  mae: number;
  mape: number;
  best?: boolean;
}

export interface ValidationPoint {
  month: string;
  actual: number;
  predicted: number;
}
