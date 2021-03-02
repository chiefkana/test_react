import React,{useState, useEffect} from 'react'
import {Posts, Pagination} from './components'
import './App.css';

function App() {
  const [posts, setPosts] = useState([{text: "lll", id: 1}, {text: "kkk", id: 2}, {text: "sss", id: 3}, {text: "xxx", id: 4}, ])
  
  const [searchText, setsearchText] = useState("")
  const [filteredPosts, setfilteredPosts] = useState([])
  const [currentPage, setcurrentPage] = useState(1)
  const ppg = 2;

  const lastPost = currentPage * ppg
  const firstPost = lastPost - ppg

  const pagination = (pageNumber) => setcurrentPage(pageNumber);
  const currentPosts = posts.slice(firstPost, lastPost);
  const handleChange =(event)=>{
    setsearchText(event.target.value)
  }
  useEffect(() => {
  const filtereds = posts.filter(post => post.text.toLowerCase().indexOf(searchText.trim().toLowerCase()) !== -1)
  setfilteredPosts(filtereds)
  }, [searchText])
  
  const sortDescending = () => {const p = [...posts]; return p.sort((a,b) => a-b).reverse()}
  
  const toggleSort = (func) =>{
    setPosts(func())
  }

  useEffect(() => {
    console.log("sort");
  },[posts])
  return (
    <div className="container pt-5">
      <h1 className="mb-3">Test App for pagination and filtration in React</h1>
      <input placeholder="Search..." onChange={handleChange}/>
      {searchText ? <Posts posts={filteredPosts}/> : <><Posts posts={currentPosts}/><Pagination ppg={ppg} totalPosts={posts.length}pagination={pagination}/></>}
      <button className="button-primary" onClick={()=>toggleSort(sortDescending)}>Sort</button>
    </div>
  );
}

export default App;
