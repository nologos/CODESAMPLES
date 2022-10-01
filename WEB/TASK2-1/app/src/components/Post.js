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
  const [input, setInput] = React.useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const [items, setitems] = React.useState([
    // { _id: "Loading..", name: "Loading..", email: "Loading..",password:"Loading.." }
  ]);
  React.useEffect(() => {
    let url = 'http://localhost:5000/record/' + input;
    console.log("this is "+ input)
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error))
      .then(setitems);
  }, 
  //refresh when button is clicked
  [input]);
  


  if (!items) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <div className="m-4">
        <input type="text" onChange={handleChange} placeholder="Enter Filter ID" />
      </div>
      <div className="row g-1 mb-5">
        {items.map((item) => (
          <div key={item._id} className="col-4">
            <div className="p-1 card">
            <h2>ID: {item._id}</h2>
              <h2>name: {item.name}</h2>
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

// const Post = () => {
//   return (
//     <div className="">
//       <section>counter</section>
//       <section>timer</section>
//       <section>title</section>
//       <section>text</section>
//     </div>
//   );
// };

// export default Post;
