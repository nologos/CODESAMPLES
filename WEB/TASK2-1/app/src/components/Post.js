import React from "react";

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

  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:5000/record")
      .then(response => response.json())
      .catch((error) => console.log(error))
      .then(setPosts);
      }, []);


  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, [count, setCount]);




  return (
    <div>
      <h1>Posts</h1>
      <h2>I've rendered {count} times!</h2>
      <div className="row g-1 mb-5">
        {posts.map((post) => (
          <div key={post._id} className="col-4">
            <div  className="p-1 card">
              <h2>{post.name}</h2>
              <p>{post.email}</p>
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
