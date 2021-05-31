import React, {useState, useEffect} from 'react';
import axios from "axios";

const ApiFetch = () => {
  const [post, setPosts] = useState([]);

  useEffect(() => {
    //リソース取得
    axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(res => {
        //リソース格納
        setPosts(res.data);
      })
  }, []);

  
  return (
    <div>
      <ul>
        {
          post.map( p =>
            <li key={p.id}>{p.title }</li>
          )
        }
      </ul>
    </div>
  )
}

export default ApiFetch
