import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Posts from './components/Posts'

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data)
        
      });
    setLoading(false);
    
  },[]);

  console.log(posts)
  return (
    
    <div className ='container mt-5'>
      <h1 className ='text-primary mb-3'>My Blog</h1>
      <Posts posts ={posts} loading ={loading}/>
    </div>
  )
};

export default App;
