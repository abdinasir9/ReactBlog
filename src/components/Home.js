import { useState } from "react";
import { useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {blogs &&<BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;