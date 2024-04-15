'use client';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
  },
};

const labels = ['Eastern', 'Central', 'Western'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Total Incidences Count',
      data: [12, 19, 10],
      backgroundColor: '#8a0806',
      borderWidth: 1,
    },
  ],
};

export function Chart() {
  return <Bar options={options} data={data} />;
}
