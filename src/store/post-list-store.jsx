import {  createContext, useReducer } from "react";


export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { }
});

const postListReducer = (currPostList, action) => {
    return currPostList;
}


const PostListProvider = ({ children }) => {
   
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);
    const addPost = () => {

    }
    const deletePost = () => {

    }
    return <PostList.Provider value={{ postList, addPost, deletePost }}>{children}</PostList.Provider>
}

const DEFAULT_POST_LIST=[{
    id:'1',
    title:'Going to Mumbai',
    body:'Hi Friends, I am goind to Mumbai for my vacations. Hope to enjoy a lot. Peace out.',
    reactions:0,
    userId:'user-9',
    tags:['vacation','Mumbai','Enjoying']
},{
    id:'2',
    title:'Pass hogye bhai',
    body:'4 saal ki amsti k baad bhi ho gye hai pass. Hard to believe.',
    reactions:15,
    userId:'user-12',
    tags:['Graduating','Unbelievable'] 
}
]

export default PostListProvider;