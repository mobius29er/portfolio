// /components/TickerChart.js
import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function TickerChart({ symbol }) {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/stocks/${symbol}`);
        const data = await res.json();

        // data["Time Series (Daily)"] has daily price info
        // Convert that object into an array of { date, close } points
        if (data["Time Series (Daily)"]) {
          const timeSeries = data["Time Series (Daily)"];
          const formattedData = Object.keys(timeSeries).map((dateStr) => ({
            date: dateStr,
            close: parseFloat(timeSeries[dateStr]["4. close"]),
          }));
          // Sort by date ascending
          formattedData.sort((a, b) => new Date(a.date) - new Date(b.date));
          setChartData(formattedData);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [symbol]);

  // If chartData is empty, show a loader or message
  if (chartData.length === 0) {
    return <div className="text-sm text-gray-300">Loading chart...</div>;
  }

  return (
    <div className="bg-black/80 p-4 rounded">
      <h2 className="text-white text-xl mb-2">{symbol} Daily Close</h2>
      <LineChart
        width={300}
        height={200}
        data={chartData}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" stroke="#fff" />
        <YAxis stroke="#fff" />
        <Tooltip />
        <Line type="monotone" dataKey="close" stroke="#FFD700" strokeWidth={2} />
      </LineChart>
    </div>
  );
}
