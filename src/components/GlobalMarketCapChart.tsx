import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { ChartData } from 'chart.js';

const fetcher = async (url: string) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return { total_market_cap: [] };
    }
  };
  
const GlobalMarketCapChart: React.FC = () => {
  const { data, error } = useSWR('https://api.coingecko.com/api/v3/coins/bitcoin', fetcher, { refreshInterval: 60000 });

  if (error) return <div>Failed to load data</div>;
  if (!data || !data.total_market_cap) return <div>Loading...</div>;

  // Ensure that data.total_market_cap is an array
  const totalMarketCapData = Array.isArray(data.total_market_cap) ? data.total_market_cap : [];

  const chartData: ChartData<'line'> = {
    labels: totalMarketCapData.map((item: [number, number]) => new Date(item[0]).toLocaleDateString()),
    datasets: [
      {
        label: 'Market Cap',
        data: totalMarketCapData.map((item: [number, number]) => item[1]),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return <Line data={chartData} />;
};

export default GlobalMarketCapChart;
