# Railway Passenger Time Series Forecasting

Time-series analysis and forecasting of railway passenger volume in Java, Indonesia using ARIMA and Seasonal ARIMA models.

## Research Dashboard

[Live Dashboard](https://muafim.github.io/Railway-Passenger-Time-Series-Forecasting-in-Java/)

The static dashboard presents the saved research results and visualizations. It does not retrain models, call an API, or require a backend.

## Research Overview

- Region: Java (Jabodetabek + Non-Jabodetabek aggregate)
- Period: 2014-2024
- Frequency: Monthly
- Observations: 132
- Train/test: 120 observations (2014-2023) / 12 observations (2024)
- Models evaluated: ARIMA, Auto ARIMA, Seasonal ARIMA
- Best model: Seasonal ARIMA
- Best MAPE: 3%

## Key Findings

- Passenger volume showed a long-term upward trend before the COVID-19 disruption.
- Passenger volume recovered significantly afterward.
- Seasonal patterns are present in the monthly data.
- Seasonal ARIMA provided the best forecasting performance for this dataset.

## Model Performance

| Model | AIC | RMSE | MAE | MAPE |
| --- | ---: | ---: | ---: | ---: |
| ARIMA (1,2,1) | 2232.286 | 2122.87 | 1831.81 | 5% |
| ARIMA (1,1,1) | 2236.663 | 1868.47 | 1413.43 | 4% |
| Auto ARIMA | 2232.736 | 1860.97 | 1400.75 | 4% |
| **Seasonal ARIMA** | **2018.594** | **1200.97** | **945.61** | **3%** |

## Tech Stack

- Research: Python, Statsmodels, pmdarima, Pandas
- Dashboard: React, TypeScript, Vite, Tailwind CSS, Recharts, Lucide React
- Deployment: GitHub Pages

## Run Dashboard Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production output is generated in `dist/`.

## Deployment

The workflow in `.github/workflows/deploy.yml` builds and deploys the dashboard with the official GitHub Pages Actions. In the repository settings, select **GitHub Actions** as the Pages source if it is not already selected.

## Research Files

- `Train Prediction.pdf` - research presentation and official reported results
- `Kelompok1_PRW.ipynb` - primary notebook
- `PRW_KELOMPOK_1.ipynb` - supplementary notebook

The original notebooks are preserved and are not executed by the dashboard.
