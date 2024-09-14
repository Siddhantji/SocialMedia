import { createContext, useReducer } from "react";


export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter((post) =>  post.id !== action.payload.postId )
    }else if(action.type == 'ADD_POST'){
        newPostList= [action.payload,...currPostList]
    }
    return newPostList;
}


const PostListProvider = ({ children }) => {

    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);
    const addPost = (userId, title, body, reactions, tags) => {
        const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        dispatchPostList({
            type: 'ADD_POST',
            payload: {
                id,
                title,
                body,
                reactions,
                userId,
                tags
            }
        })
    }
    const deletePost = (postId) => {
        console.log(postId);
        dispatchPostList({
            type: 'DELETE_POST',
            payload: {
                postId
            }
        })
    }
    return <PostList.Provider value={{ postList, addPost, deletePost }}>{children}</PostList.Provider>
}

const DEFAULT_POST_LIST = [{
    id: '1',
    title: 'Going to Mumbai',
    body: 'Hi Friends, I am goind to Mumbai for my vacations. Hope to enjoy a lot. Peace out.',
    reactions: 0,
    userId: 'user-9',
    tags: ['vacation', 'Mumbai', 'Enjoying']
}, {
    id: '2',
    title: 'Pass hogye bhai',
    body: '4 saal ki amsti k baad bhi ho gye hai pass. Hard to believe.',
    reactions: 15,
    userId: 'user-12',
    tags: ['Graduating', 'Unbelievable']
}
]

export default PostListProvider;