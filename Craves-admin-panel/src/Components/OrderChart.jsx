import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { dataset } from "./Weather";

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  width: 670,
  height: 370,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};

function OrderChart() {
  return (
    <div className="bg-white p-4 w-full rounded-2xl">
      <p className="text-xl">
      Order Cancelation Rate  <span className="text-sm text-puregreys-600">(of privious 10 days)</span>
      </p>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "month" }]}
        series={[

          { dataKey: "newYork", label: "Cancel Orders"},
          { dataKey: "seoul", label: "total Orders" },
        ]}
        {...chartSetting}
      />
    </div>
  );
}

export default OrderChart;
