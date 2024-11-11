"use client"

// ResultAnalysisChart.tsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register components with ChartJS
ChartJS.register(ArcElement, Tooltip, Legend);

interface ChartDataProps {
  rightAnswers: number;
  wrongAnswers: number;
  noAnswers: number;
  notAttempted: number;
}

const ResultAnalysisChart: React.FC<ChartDataProps> = ({ rightAnswers, wrongAnswers, noAnswers, notAttempted }) => {
  const data = {
    labels: ['Right Answers', 'Wrong Answers', 'No Answers', 'Not Attempted'],
    datasets: [
      {
        data: [rightAnswers, wrongAnswers, noAnswers, notAttempted],
        backgroundColor: ['#3B82F6', '#2DD4BF', '#F472B6', '#FBBF24'],
        hoverOffset: 4,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: '50%', // Adjust for donut chart
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  };

  return (
    <div className="w-full rounded-xl border p-4 border-[#F89E21] flex flex-col justify-center items-center">
      <Doughnut data={data} options={options} />
      {/* <div className="mt-4 flex flex-wrap items-center gap-2 text-center space-y-2">
        <div className="flex items-center justify-center space-x-4">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <p>Right Answers</p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
          <p>Wrong Answers</p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
          <p>No Answers</p>
        </div>
        <div className="flex items-center justify-center space-x-4">
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <p>Not Attempted</p>
        </div>
      </div> */}
    </div>
  );
};

export default ResultAnalysisChart;
