import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Sidenav from './Sidenav';
import { Container } from 'react-bootstrap';

let username = 'coalition';
let password = 'skills-test';
let auth = btoa(`${username}:${password}`);
function Profile() {
  const [posts,setPosts]=useState([]);
  useEffect(() => {
    fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
      headers: {
        'Authorization': `Basic ${auth}`
      }
    }).then(resp => resp.json())
      .then(resp => setPosts(resp))
  }, [posts])
const handleClick = (e) =>{
  // console.log(e);
}
  return (
    <>
      <div className='profile'>
      <div className='nav-head'>
    <h2>Patients</h2>
    <button
        className="search-icon"
      >
        <SearchIcon/>
      </button>

      </div>
      {posts.map((post,index)=><Sidenav onClick={handleClick(post.name)} id={post.name} image={post.profile_picture} user={post.name} age={post.age} gender={post.gender}></Sidenav>)}
      
      {/* {posts.map(post=><p>{post.name}</p>)} */}
      </div>
    </>
  );
}
export default Profile;