import App from '../App.jsx'
import Home from '../pages/Home.jsx'
import Post from '../pages/Posts.jsx'
import SignUp from '../pages/SignUp.jsx'
import AllPosts from '../pages/AllPosts.jsx'
import AddPost from "../pages/AddPost.jsx"
import EditPost from "../pages/EditPost.jsx"
import { Login, Protected } from '../components/index.js'
import { createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: (
                    <Protected authentication={false}>
                        <Login />
                    </Protected>
                )
            },
            {
                path: "/signup",
                element: (
                    <Protected authentication={false}>
                        <SignUp />
                    </Protected>
                )
            },
            {
                path: "/all-posts",
                element: (
                    <Protected authentication>
                        <AllPosts />
                    </Protected>
                )
            },
            {
                path: "/add-post",
                element: (
                    <Protected authentication>
                        <AddPost />
                    </Protected>
                )
            },
            {
                path: "/edit-post/:slug",
                element: (
                    <Protected authentication>
                        <EditPost />
                    </Protected>
                )
            },
            {
                path: "/post/:slug",
                element: <Post />
            }
        ]
    }
]);

export default router;
