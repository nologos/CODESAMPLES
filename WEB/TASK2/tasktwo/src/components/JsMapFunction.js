import React from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// foreach number add 5 and console log it
const JsMapFunction = () => {
  const newNumbers = numbers.map((number) => {
    return number + 5;
  });
  return (
    <div className="container my-5">
      <div className="row bg-primary g-3 pb-4">
      <h1>JsMapFunction</h1>
        {newNumbers.map((number) => {
          return (
            <div key={number} className="col-6 col-md-1 minWidth100">
                <div className="p-1 bg-light border border-radius-1 border-color-dark d-flex justify-content-center align-items-center mb-0">
                  {number}
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JsMapFunction;
