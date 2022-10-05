import React from 'react'

const Cryptoanalysis = () => {

// let url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';

// get market cap of top 50 coins
const [state, setState] = React.useState([]);

React.useEffect(
    () => {
        let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";
        fetch(url)
            .then((response) => response.json())
            .catch((error) => console.log(error))
            .then(setState);
    },
    //refresh when button is clicked
    []);
    
    // from json add all market caps
    let totalMarketCap = 0;
    for (let i = 0; i < state.length; i++) {
        totalMarketCap += state[i].market_cap;
    }
    

    // from json get bitcoin marketcap
    let bitcoinMarketCap = 0;
    let bitcoinPrice = 0;
    for (let i = 0; i < state.length; i++) {
        if (state[i].id === "bitcoin") {
            bitcoinMarketCap = state[i].market_cap;
            bitcoinPrice = state[i].current_price;
        }
    }

    // calculate bitcoin market cap percentage
    let bitcoinMarketCapPercentage = (bitcoinMarketCap / totalMarketCap) * 100;



  return (
    // table
    <div className='container'>
        <h1>Market Cap</h1>
        {/* bitcoin price */}
        <h2>Bitcoin Market Cap: {bitcoinPrice}</h2>
        <h2>Bitcoin Market Cap: {bitcoinMarketCapPercentage.toFixed(2)}%</h2>
        <table>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Market Cap</th>
                <th>Price</th>
                <th>Volume</th>
                <th>Change</th>
            </tr>
            {state.map((coin) => (
                <tr>
                    <td>{coin.market_cap_rank}</td>
                    <td>{coin.name}</td>
                    <td>{coin.symbol}</td>
                    <td>{coin.market_cap}</td>
                    <td>{coin.current_price}</td>
                    <td>{coin.total_volume}</td>
                    <td>{coin.price_change_percentage_24h}</td>
                </tr>
            ))}
        </table>
    </div>
  )
}

export default Cryptoanalysis