import React, { useEffect } from "react";

// timer function
// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   });
// }

// post using async await
const Post = () => {
  // input field
  var [input, setInput] = React.useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const [items, setItems] = React.useState([
    // { _id: "Loading..", name: "Loading..", email: "Loading..",password:"Loading.." }
  ]);
  React.useEffect(() => {
      var url = "http://localhost:5000/record/"+ input;;
    fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error))
      .then(setItems);
  }, 
  //refresh when button is clicked
  [input]);
   


  if (!items) {
    return <div>Loading...
      <input type="text" onChange={handleChange} placeholder="Enter Filter ID" />
    </div>;
  }

  return (
    <div>
      <div className="m-4">
        <input type="text" onChange={handleChange} placeholder="Enter Filter ID" />
      </div>
      <div className="row g-1 mb-5">
        {items.map((item) => (
          <div key={item._id} className="col-4">
            <div className="p-1 card">
            <h4>ID: {item._id}</h4>
              <p>name: {item.name}</p>
              <p>Email:{item.email}</p>
              <p>PW:{item.password}</p>
            </div>
          </div>
        ))}          
      </div>
    </div>
  );
};

export default Post;

