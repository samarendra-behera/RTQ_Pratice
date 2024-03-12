import { FormEvent, useState } from "react"
import PostCard from "./components/postcard"
import { useGetPostsQuery, useNewPostMutation } from "./redux/api"


const App = () => {

  const {isLoading, data } = useGetPostsQuery("")
  const [newPost] = useNewPostMutation()

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const formSubmitHandler = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    newPost({
      title,
      body,
      userId: Math.round(Math.random() * 1000),
      id: Math.round(Math.random() * 1000)
    })
    setTitle("")
    setBody("")
  }
  
  return (
    <div>

      <h1>My App</h1>

      <form onSubmit={formSubmitHandler}>
        <input type="text" placeholder="enter post title" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <input type="text" placeholder="enter post body" value={body} onChange={(e)=> setBody(e.target.value)}/>
        <button type="submit" >Add</button>
      </form>

      {isLoading ? (
        <div>Loading....</div>
      ) : (
        data?.map((i)=> <PostCard post={i} key={i.id}/>)
      )}
    </div>
  )
}

export default App