'use client';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

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
      label: 'Incidences Per Region',
      data: [45, 35, 55],
      backgroundColor: ['#8a0806', '#facd2a', '#ff530f'],
    },
  ],
};

export function RegionalChart() {
  return <Pie options={options} data={data} />;
}
