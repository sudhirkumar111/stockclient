import { useEffect, useState } from "react"
import axios from 'axios'

const Home = () => {

  const [stockList, setStock] = useState([]);
  const [selectedStock, setSelectedStock] = useState();
  const [stockPrice, setStockPrice] = useState();
  const [stockId,setStockId] = useState();

  const api = axios.create({
    baseURL: 'https://stock-server-99gz.onrender.com/',
  });

  // const updateStockPrice = () => {   
  //   const randomPrice = Math.floor(Math.random() * 1000); 
  //   saveStockPriceToDatabase(randomPrice);
  //   setStockPrice(randomPrice);
  // };

  // const saveStockPriceToDatabase = async (newPrice) => {
  //   await api.patch('/update-price',{price:newPrice,stockId});
  // };
 
  // useEffect((selectedStock) => {
  //   const intervalId =  selectedStock && setInterval(updateStockPrice, 1000);
  //   return () => clearInterval(intervalId);
  // }, [stockPrice]);

  const updateStockPrice = () => {   
  const randomPrice = Math.floor(Math.random() * 1000); 
  saveStockPriceToDatabase(randomPrice);
  setStockPrice(randomPrice);
};

const saveStockPriceToDatabase = async (newPrice) => {
  await api.patch('/update-price', { price: newPrice, stockId });
};

useEffect(() => {
  let intervalId;

  if (selectedStock) {
    intervalId = setInterval(updateStockPrice, 1000);
  }

  return () => clearInterval(intervalId);
}, [selectedStock]);



  const getStock = async () => {
    const stock = await api.get('/getData');
    setStock(stock.data)
  }

  useEffect(() => {
    getStock();    
  })

 //  const handleChange = (event) => {
 //    setSelectedStock(event.target.value);
 //    stockList.find((stock) => {
 //          if (event.target.value === stock.name)  {setStockPrice(stock.price);setStockId(stock._id)}
 //        })
 // };
  const handleChange = (event) => {
  const selectedStockName = event.target.value;

  const selectedStock = stockList.find((stock) => stock.name === selectedStockName);

  if (selectedStock) {
    setSelectedStock(selectedStockName);
    setStockPrice(selectedStock.price);
    setStockId(selectedStock._id);
  }
};

  return (
    <div className="Home">

      <h1>Welcome to Mini Stock Price Tracker Dashboard</h1>

      <p>Select company to track price</p>
      <select onChange={handleChange}>
      <option value="">Select a stock</option>
      {console.log(stockList,"====list")}
        {stockList.length > 0 && stockList.map((stock, index) => (
          <option key={stock._idx} value={stock.name}>
            {stock.name}
          </option>
        ))}
      </select>
      <h1>Selected Stock: {selectedStock}</h1>
      <h1>Current Price:{stockPrice || ''}</h1>

    </div>
  )


}


export default Home
