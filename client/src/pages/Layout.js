import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import icon from '../icon/daisi_logo.png'

function Layout() {
    return (
        <div className='flex flex-col h-max ' data-theme={'light'}>
            <div className="navbar bg-base-200">
                <div className='flex'>
                    <button className="btn btn-ghost normal-case text-xl">
                        <img src={icon} alt="" style={{ height: 30, weight: 30, paddingRight: 5 }} />
                        Daisi</button>
                </div>
            </div>
            <div className='flex h-full'>
                <div className=" w-1/12 shadow-md bg-base-200 px-1 ">
                    <ul className="relative">
                        <li>
                            <Link to={'/'}>
                                <button className='text-md font-medium px-6 py-4 hover:bg-base-100 transition duration-10 w-full text-left'>Home</button>
                            </Link>
                        </li>
                        <li className="relative">
                            <div className="collapse collapse-arrow">
                                <input type="checkbox" className="peer" />
                                <div className="collapse-title text-md font-medium px-6 py-4 hover hover:bg-base-100 transition duration-10">
                                    Container
                                </div>
                                <div className="collapse-content bg-base-100 px-6">
                                    <p>hello</p>
                                </div>
                            </div>
                        </li>
                        <li className="relative">
                            <Link to={'/form-daisi'}>
                                <button
                                    className='text-md font-medium px-6 py-4 hover:bg-base-100 transition duration-10 w-full text-left'>Daisi Form
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='h-screen w-full'>
                    <Outlet />
                </div>
            </div>
        </div>

    )
}

export default Layout