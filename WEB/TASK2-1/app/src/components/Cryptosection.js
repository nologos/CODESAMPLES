import React, { useState } from "react";
import { useEffect } from "react";

const Cryptosection = () => {
  // let url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
  // let url = 'https://api.opendota.com/api/heroes'

  // get bitcoin price
  const [state, setState] = React.useState([]);
  React.useEffect(
    () => {
      let url = "http://localhost:5000/btconly";
      fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
        .then((data) => setState(data.bitcoin.usd));
    },
    //refresh when button is clicked
    []
  );

  //get bitcoin, ethereum, dogecoin price in usd and gbp
  const [state2, setState2] = React.useState([]);
  React.useEffect(() => {
    let url = "http://localhost:5000/coinUSDGBP";
    fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error))
      .then((data) => setState2(data))
      .catch((error) => console.log(error));
  }, []);

  
  
  
  


  if (!state) {
    return <div>Loading data...</div>;
  }
  
  // if api not responding return loadingf
  if (!state2) {
    return (<div className="container">API error... rate limit??</div>);
  }


  return (
    <div className="container">
      <h1>Cryptosection</h1>
      <h4>served from free web API</h4>
      <h4>NEW: now the API is server from backend cached web API</h4>
      <p>single object price {state}</p>
      {/* map state2  */}
      <div className="row">
        {Object.keys(state2).map((key) => (
          <div key={key} className="col-4">
            <div className="p-1 card">
              <div className="card-body">
                <h5 className="card-title">{key}</h5>
                <p className="card-text">USD:{state2[key].usd}</p>
                <p className="card-text">GBP:{state2[key].gbp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cryptosection;
