//stock.js
import { useParams } from "react-router-dom";
import data from '../data.json';

function Stock() {
  let { symbol } = useParams();
  const stock = data.find((stock) => stock.symbol === symbol);

  return (
    <div>
      <h2>{stock.name} ({stock.symbol})</h2>
      <p>Last Price: {stock.lastPrice}</p>
      <p>Change: {stock.change}</p>
      <p>High: {stock.high}</p>
      <p>Low: {stock.low}</p>
      <p>Open: {stock.open}</p>
    </div>
  );
}

export default Stock;
