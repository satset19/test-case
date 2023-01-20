import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import logo from "../icon/daisi_logo.png"
import { actionRegister } from '../store/action/actionCompany'
import Swal from 'sweetalert2'


function RegisterForm() {

    const [input, setInput] = useState({})
    const [errorConfirm, setErrorConfirm] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function inputRegister(e) {
        let obj = { ...input }
        obj[e.target.name] = e.target.value
        setInput(obj)
    }

    function handleConfirmPassword(e) {
        const cPassword = e.target.value
        if (cPassword === input.password) {
            setErrorConfirm("")
        } else {
            setErrorConfirm('Password not match')
        }
    }

    return (
        <div className="h-screen flex justify-center items-center" data-theme={'light'} id="card_register">
            <div className="w-1/4">
                <form className="bg-base-200 shadow-md rounded-xl py-10"
                    id='form-register'
                    onSubmit={(e) => {
                        e.preventDefault()
                        // console.log(input)
                        dispatch(actionRegister(input))
                            .then(() => {
                                navigate("/login");
                            })
                            .catch((err) => {
                                Swal.fire(
                                    err,
                                    '',
                                    'error'
                                )
                            });
                    }}
                >
                    <div className='flex flex-col items-center'>
                        <img src={logo} style={{ width: 96, height: 96 }} />
                        <p className='py-10 font-medium font-sans text-xl'>Sign up to our platform</p>
                    </div>
                    <div className="form-control py-5 ">
                        <label className="input-group px-5">
                            <span className='w-1/5 text-sm font-bold'>Email</span>
                            <input onChange={(e) => {
                                inputRegister(e)
                            }} type="text" name="email" placeholder="info@site.com" className="input input-bordered w-4/5" />
                        </label>
                    </div>
                    <div className="form-control py-5">
                        <label className="input-group px-5 text-sm">
                            <span className='w-1/5 text-sm font-bold'>Password</span>
                            <input onChange={(e) => {
                                inputRegister(e)
                            }} type="password" name="password" placeholder="**********" className="input input-bordered w-4/5" />
                        </label>
                    </div>
                    <div className="form-control py-5">
                        <label className="input-group px-5 text-sm">
                            <span className='w-1/5 text-sm font-bold'>Confirm Password</span>
                            <input onChange={(e) => {
                                handleConfirmPassword(e)
                            }} type="password" name="confrimPassword" placeholder="**********" className="input input-bordered w-4/5" />
                        </label>
                        {
                            errorConfirm && (
                                <div className='flex justify-center'>
                                    <p className=' text-red-500'>{errorConfirm}</p>
                                </div>
                            )
                        }
                    </div>
                    <div className="form-control py-5 ">
                        <label className="input-group px-5">
                            <span className='w-1/5 text-sm font-bold'>Company</span>
                            <input onChange={(e) => {
                                inputRegister(e)
                            }} type="text" name="company_name" placeholder="input your company" className="input input-bordered w-4/5" />
                        </label>
                    </div>
                    <div className="form-control py-5 ">
                        <label className="input-group px-5">
                            <span className='w-1/5 text-sm font-bold'>Label Company</span>
                            <input onChange={(e) => {
                                inputRegister(e)
                            }} type="text" name="label_company" placeholder="input label company" className="input input-bordered w-4/5" />
                        </label>
                    </div>
                    <div className="flex items-center justify-around pt-5">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign Up
                        </button>
                        <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" data-cy="button-signup"
                            onClick={() => {
                                navigate('/login')
                            }}>
                            Have account?
                        </button>
                    </div>
                </form>
            </div>
        </ div>
    )
}

export default RegisterForm