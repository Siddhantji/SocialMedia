import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {

    const { postList, addInitialPosts } = useContext(PostListData);
    const [fetching, setFetching] = useState(false);

    useEffect(() => {

        setFetching(true);
        const controller = new AbortController();
        const signal = controller.signal;
        fetch('https://dummyjson.com/posts', { signal })
            .then(res => res.json())
            .then(data => {
                addInitialPosts(data.posts);
                setFetching(false);
            })
            .catch(error => {
                if (error.name !== 'AbortError') {
                    console.error('Fetch error:', error);
                    setFetching(false); 
                }
            });
        return () => {
            console.log("aborted");
            controller.abort();
        }
    }, []);

    return (
        <>
            {fetching && (<LoadingSpinner></LoadingSpinner>)}
            {!fetching && postList.length === 0 && (<Welcome ></Welcome>)}
            {!fetching && postList.map((post) => (
                <Post key={post.id} post={post}></Post>
            ))}
        </>
    )
}

export default PostList;