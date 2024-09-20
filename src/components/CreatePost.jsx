import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const { addPost } = useContext(PostList);
  const userId = useRef()
  const postTitle = useRef()
  const postBody = useRef()
  const reactions = useRef()
  const tags = useRef()
  const handleSubmit = (event) => {
    event.preventDefault();
    addPost(
      userId.current.value,
      postTitle.current.value,
      postBody.current.value,
      reactions.current.value,
      tags.current.value.split(',')
    )
    userId.current.value = ""
    postTitle.current.value = ""
    postBody.current.value = ""
    reactions.current.value = ""
    tags.current.value = ""
    navigate("/");
  }

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">User Id</label>
        <input type="text" className="form-control" ref={userId} id="title" placeholder="Your user id" />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post title</label>
        <input type="text" className="form-control" ref={postTitle} id="title" placeholder="How are you feeling today" />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post content</label>
        <textarea rows={4} type="text" className="form-control" ref={postBody} id="title" placeholder="Tell us more about it" />
      </div>
      <div className="mb-3">
        <label htmlFor="hashtags" className="form-label">Hashtags</label>
        <input type="text" className="form-control" id="title" ref={tags} placeholder="Enter your hashtags" />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Number of reactions</label>
        <input type="text" className="form-control" id="title" ref={reactions} placeholder="How many people reacted on this" />
      </div>
      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  )
}
export default CreatePost;