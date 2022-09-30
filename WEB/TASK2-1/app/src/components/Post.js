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

  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    let url = 'http://localhost:5000/record/' + input;
    console.log("this is "+ input)
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .catch((error) => console.log(error))
      .then(setPosts);
  }, []);

  const [count, setCount] = React.useState(0);
  const [minute, setMinute] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
      setMinute((minute) => Math.floor(count / 60));
    }, 1000);
  }, [count, setCount]);

  return (
    <div>
      <h1>Posts</h1>
      <h2>I've rendered {count} times!</h2>
      <h3>equivalent of {minute} minutes</h3>
      <div className="m-4">
        <input type="text" onChange={handleChange} />
        <button
          onClick={() => {
            console.log(input);
          }}
        >
          Submit
        </button>
      </div>
      <div className="row g-1 mb-5">
        {posts.map((post) => (
          <div key={post._id} className="col-4">
            <div className="p-1 card">
              <h2>name: {post.name}</h2>
              <p>Email:{post.email}</p>
              <p>PW:{post.password}</p>
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
