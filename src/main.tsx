import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import HomePage from './pages/Homepage.tsx';
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';
import Blog from './pages/Blog.tsx';
import BlogPost from './pages/BlogPost.tsx';
// import { posts } from '#site/content';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,

        children: [
            {
                index: true,
                element: <Navigate to="/home" replace/>
            },
            {
                path: "/home",
                element: <HomePage />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/blog/:slugAsParams",
                element: <BlogPost />,
            }
            
           
        ]
    }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HelmetProvider>
           
            <RouterProvider router={router} />
            
        </HelmetProvider>
    </React.StrictMode>
)
