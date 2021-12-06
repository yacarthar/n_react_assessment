import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState();
  useEffect( () => {
    let didCancel = false;
    if (!didCancel) {
      axios({
        url: "http://jsonplaceholder.typicode.com/posts",
        method: "GET",
      }).then(response => {
        console.log(response.data)
          setPosts(response.data);
        }).catch(error => {
          setError(error.message)
        });
    }
    return () => {
      didCancel = true;
    }
  }, []);
  if(error) return (<p>Error: {error}</p>)

  
  const postsFiltered = posts.filter(
    item => item.title.toLowerCase().includes(searchText.toLowerCase())
  );
  console.log(postsFiltered)

  return (
    <div>
      <div className="search-posts">
        <input value={searchText} type="text" placeholder="Search"
          onChange={evt=>setSearchText(evt.target.value)}/>
      </div>

      {postsFiltered.map( (item, index) => (
        <div key={item.id}>
          <p>{index}</p>
          <p>Title: {item.title}</p>
          <span style={{display: "block"}}>--------------------</span>
        </div>
        ))
      }
      {/* <table id="simple-board">
          <tbody>
            {postsFiltered.map((item, index) => (
              <tr key={index} id={item.id}>{item.id} {item.title}</tr>
            ))}
          </tbody>
      </table> */}
    </div>
  );
};

export default Posts;
