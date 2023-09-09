import { PostCard } from "../PostCard"
import './style.css'

export const Posts = ({posts}) => (
  <div className="posts">
    {posts.map(post => ( 
      <PostCard 
        key={post.id}
        // title = {post.title}
        // body = {post.body}
        // id = {post.id}
        // cover = {post.cover}
        //posso fazer assim tbm, passando tudo, da pra usar quando tem muita coisa 
        post={post}
            />
      ))}
  </div>
)