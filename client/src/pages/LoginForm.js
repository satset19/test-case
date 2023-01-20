import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import logo from "../icon/daisi_logo.png"
import { useDispatch } from 'react-redux'
import { actionLogin } from '../store/action/actionCompany'
import Swal from 'sweetalert2'


function LoginForm() {
    const [input, setInput] = useState({})
    const navigate = useNavigate()
    const dispatch = useDispatch()


    function InputLogin(e) {
        let obj = { ...input }
        obj[e.target.name] = e.target.value
        setInput(obj)
    }
    // console.log(input)
    return (
        <div className="h-screen flex justify-center items-center" data-theme={'light'}>
            <div className="w-1/4">
                <form onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(actionLogin(input))
                        .then(() => {
                      
                            navigate('/')
                        })
                        .catch(err => {
                            console.log(err)
                            Swal.fire(
                                err,
                                '',
                                'error'
                            )
                        })
                }}
                    className="bg-base-200 shadow-md rounded-xl py-10">
                    <div className='flex justify-center px-10'>
                        <div className='flex flex-col items-center'>
                            <img src={logo} style={{ width: 96, height: 96 }} />
                            <p className='py-10 font-medium font-sans text-xl'>Sign in to our platform</p>
                        </div>
                    </div>
                    <div className="form-control py-5 ">
                        <label className="input-group px-5">
                            <span className='w-1/5 text-sm'>Email</span>
                            <input onChange={(e) => InputLogin(e)} type="text" placeholder="info@site.com" name='email' className="input input-bordered w-4/5" />
                        </label>
                    </div>
                    <div className="form-control py-5">
                        <label className="input-group px-5 text-sm">
                            <span className='w-1/5'>Password</span>
                            <input onChange={(e) => InputLogin(e)} type="password" placeholder="**********" name='password' className="input input-bordered w-4/5" />
                        </label>
                    </div>
                    <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 px-5" >
                        Forgot Password?
                    </button>
                    <div className="flex flex-col items-center justify-around py-10 px-10">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                            Sign In
                        </button>
                        <p className='py-5'>Not registered?
                            <button className='text-blue-500 hover:text-blue-800 px-2'
                                onClick={() => {
                                    navigate('/register')
                                }}> Create account </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm