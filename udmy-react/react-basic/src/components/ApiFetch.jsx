import React, {useState, useEffect} from 'react';
import axios from "axios";

const ApiFetch = () => {
  const [post, setPosts] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    //リソース取得
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        //リソース格納
        setPosts(res.data);
      })
  }, [id]);

  
  return (
    <div>
      <input type="number" value={id} onChange={e => setId(e.target.value)} />
      <h1>{post.title}</h1>
    </div>
  )
}

export default ApiFetch
