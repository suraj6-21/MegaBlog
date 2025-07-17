import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './Store/Store.js'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />
//       },
//       {
//         path: "/login",
//         element: <Protected authentication={false}>
//           <Login />
//         </Protected>
//       },
//       {
//         path: "/signup",
//         element: <Protected authentication={false}>
//           <SignUp />
//         </Protected>
//       },
//       {
//         path: "/all-posts",
//         element: (
//           <Protected authentication>
//             <AllPosts />
//           </Protected>
//         ),
//       },
//       {
//         path: "/add-post",
//         element: (
//           <Protected authentication>
//             <AddPost />
//           </Protected>
//         ),
//       },
//       {
//         path: "/edit-post/:slug",
//         element: (
//           <Protected authentication>
//             {" "}
//             <EditPost />
//           </Protected>
//         ),
//       },
//       {
//         path: "/post/:slug",
//         element: <Post />,
//       },
//     ]
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
