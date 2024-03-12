import { Post } from "../vite-env"


const PostCard= ({post}:{post:Post}) => {
  return (
    <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </div>
  )
}

export default PostCard
