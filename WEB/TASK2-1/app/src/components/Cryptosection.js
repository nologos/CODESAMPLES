import React, { useState } from "react";
import { useEffect } from "react";

const Cryptosection = () => {
  // let url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
  // let url = 'https://api.opendota.com/api/heroes'

  // get bitcoin price
  const [state, setState] = React.useState([]);
  React.useEffect(
    () => {
      let url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
      fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
        .then((data) => setState(data.bitcoin.usd));
    },
    //refresh when button is clicked
    []
  );

  //get bitcoin, ethereum, dogecoin price
  const [state2, setState2] = React.useState([]);
  React.useEffect(
    () => {
      let url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd";
      fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error))
        .then((data) => setState2(data));
    },
    //refresh when button is clicked
    []
  );

  //get bitcoin, ethereum, dogecoin price in usd and gbp
  const [state3, setState3] = React.useState([]);
  React.useEffect(() => {
    let url = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd,gbp";
    fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error))
      .then((data) => setState3(data))
      .catch((error) => console.log(error));
  }, []);




  if (!state) {
    return <div>Loading data...</div>;
  }
  
  // if api not responding return loadingf
  if (!state3) {
    return (<div className="container">API error... rate limit??</div>);
  }


  return (
    <div className="container">
      <h1>Cryptosection</h1>
      <h4>served from free web API</h4>
      <p>single object price {state}</p>
      {/* <div className="row">
        {Object.keys(state2).map((key) => (
          <div key={key} className="col-4">
            <div className="p-1 card">
              <div className="card-body">
                <h5 className="card-title">{key}</h5>
                <p className="card-text">{state2[key].usd}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}
      {/* map state3  */}
      <div className="row">
        {Object.keys(state3).map((key) => (
          <div key={key} className="col-4">
            <div className="p-1 card">
              <div className="card-body">
                <h5 className="card-title">{key}</h5>
                <p className="card-text">USD:{state3[key].usd}</p>
                <p className="card-text">GBP:{state3[key].gbp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cryptosection;
