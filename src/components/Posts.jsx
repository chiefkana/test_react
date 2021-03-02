import React from 'react'

const Posts = ({posts}) => {
    console.log(posts);
    return (
        <ul>
            {posts.map(post => <li><div><h3>{post.text}</h3><p>{post.id}</p> </div></li>)}
        </ul>
    )
}

export default Posts
