import "./style.css";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { inject as injectAnalytics } from "@vercel/analytics";

const backgroundColors = [
  "#CDBAF3",
  "#F8D7FC",
  "#FCEEFE",
  "#F9FBD2",
  "#F9F9EA",
  "#9FD1F7",
  "#EDEDEF",
  "#FFFFFF",
];

window.addEventListener("load", () => {
  const body = document.body;
  const backgroundColor =
    backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  body.style.backgroundColor = backgroundColor;
});

injectSpeedInsights();
injectAnalytics();
