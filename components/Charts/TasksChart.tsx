'use client'

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface DonutChartProps {
  total: number;
  done: number;
}

const TasksChart: React.FC<DonutChartProps> = ({ total, done }) => {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart<"doughnut"> | null>(null);

    useEffect(() => {
        if (chartRef.current) {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');

        if (ctx) {
            chartInstance.current = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Done', 'Remaining'],
                datasets: [
                {
                    data: [done, total - done],
                    backgroundColor: ['#665B5B', '#ADA49F'], // Adjust to your desired colors
                    hoverBackgroundColor: ['#665B5B', '#ADA49F'], // Adjust to your desired colors for hover
                },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%', // Adjust the size of the inner circle
                plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                },
                },
                interaction: {
                mode: 'point',
                intersect: false,
                },
                elements: {
                arc: {
                    borderWidth: 0, // Remove border
                },
                },
            },
            });
        }
        }
    }, [total, done]);

    useEffect(() => {
        function setCanvasHeight() {
          if (chartRef.current) {
            chartRef.current.height = chartRef.current.offsetWidth;
          }
        }
    
        setCanvasHeight();
        window.addEventListener('resize', setCanvasHeight);
        return () => {
          window.removeEventListener('resize', setCanvasHeight);
        };
    }, []);

  return (
    <div className='w-[60px] aspect-square'>
      <canvas ref={chartRef} style={{ height: '60px' }}></canvas>
    </div>
  );
};

export default TasksChart;
