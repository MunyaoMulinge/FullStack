import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { createStandaloneToast } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import './index.css'

const { ToastContainer } = createStandaloneToast()

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/dashboard',
        element: <App/>
    }
])

createRoot(document.getElementById('root'))
    .render(
        <StrictMode>
            <ChakraProvider>
                <RouterProvider router={router}/>
                <ToastContainer />
            </ChakraProvider>
        </StrictMode>,
)
