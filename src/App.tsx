import PostCard from "./components/postcard"
import { useGetPostsQuery } from "./redux/api"


const App = () => {
  const {isLoading, data } = useGetPostsQuery("")
  return (
    <div>

      <h1>My App</h1>

      {isLoading ? (
        <div>Loading....</div>
      ) : (
        data?.map((i)=> <PostCard post={i} key={i.id}/>)
      )}
    </div>
  )
}

export default App