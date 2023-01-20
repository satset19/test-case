import { createBrowserRouter, redirect } from "react-router-dom"
import LoginForm from "../pages/LoginForm"
import RegisterForm from "../pages/RegisterForm"
import Layout from "../pages/Layout"
import HomePage from "../pages/HomePage"
import FormDaisi from "../pages/FormDaisi"

const router = createBrowserRouter([
    {
        path: '/login',
        loader: async () => {
            if (localStorage.getItem("access_token")) {
                return redirect('/')
            }
            return null
        },
        element: <LoginForm />
    },
    {
        path: '/register',
        element: <RegisterForm />
    },
    {
        element: <Layout />,
        loader: async () => {
            if (!localStorage.getItem("access_token")) {
                return redirect('/login')
            }
            return null
        },
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/form-daisi',
                element: <FormDaisi />
            }
        ]
    }

])

export default router