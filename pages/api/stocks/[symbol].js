// /pages/api/stocks/[symbol].js
import axios from "axios";

export default async function handler(req, res) {
  const { symbol } = req.query;
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY;

  try {
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${apiKey}`;
    const response = await axios.get(url);

    // We'll just return the entire response for now
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
}
