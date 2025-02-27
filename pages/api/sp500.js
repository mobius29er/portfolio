// pages/api/sp500.js
import sp500 from "../../data/sp500";

export default function handler(req, res) {
  // Optionally, you could randomize, filter, or limit the list
  // For now, we'll just return the full array
  return res.status(200).json(sp500);
}
