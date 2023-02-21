import axios from "axios"
import React from "react"
import { useState } from "react"
function AxiosLibrary ()
{
    const baseUrl = "https://c75b-49-207-181-161.in.ngrok.io/allemp"
    const [post,setPost] = useState(null)
    React.useEffect(()=> {
        axios.get(baseUrl).then((response) => {
            setPost(response.data)
        })
    },[])
    function CreatePost()
    {
        axios
        .get(baseUrl, {
          title: "Hello World!",
          body: "This is a new post."
    })
        .then((response) => {
          setPost(response.data);
        });
    }
    if(!post) 
    {
        return null
    }
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={CreatePost}>Create Post</button>
        </div>
    )
}
export default AxiosLibrary

