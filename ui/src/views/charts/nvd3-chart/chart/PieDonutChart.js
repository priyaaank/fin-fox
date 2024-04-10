import React from 'react';
import NVD3Chart from 'react-nvd3';

const PieDonutChart = ({ data }) => {
  return <NVD3Chart id="chart" height={310} type="pieChart" datum={data} x="key" y="y" donut labelType="percent" />;
};

export default PieDonutChart;
