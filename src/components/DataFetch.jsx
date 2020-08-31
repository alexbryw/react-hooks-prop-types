import React, {useState, useEffect} from 'react'
import './DataFetch.scss'
const axios = require('axios').default

export default function DataFetch(){
    const urlPosts = "https://jsonplaceholder.typicode.com/posts/"
    const [post, setPost] = useState({})
    const [currentPost, setCurrentPost] = useState(1)

    useEffect(()=>{
        const getPosts = async() => {
            try {
                const response = await axios.get(urlPosts + currentPost)
                console.log(response)
                setPost(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        getPosts()
    },[currentPost])

    return(
        <div className="DataFetchContainer">
            <h4>Post fetch: {currentPost}</h4>
            <button onClick={() => {setCurrentPost(currentPost + 1)}}>Next</button>
            {post ? <h4>{post.title}</h4> : undefined}
        </div>
    )
}