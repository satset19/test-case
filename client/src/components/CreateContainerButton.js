import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createContainer } from '../store/action/actionContainer'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'

function CreateContainerButton() {
    const labelCompany = localStorage.getItem('label_company')
    const [containerName, setContainerName] = useState({ container_name: `01${labelCompany}` })
    const handleChange = (e) => {
        const obj = { ...containerName }
        obj[e.target.name] = e.target.value
        setContainerName(obj)
    }

    const dispatch = useDispatch()
    return (
        <div>
            <label htmlFor="my-modal-4" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Create Container</label>

            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal">
                <label className="modal-box relative" htmlFor="">
                    <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Create Container</h3>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        dispatch(createContainer(containerName))
                            .then(() => {
                                window.location.reload(false);
                            })
                            .catch(err => {
                                Swal.fire(
                                    err,
                                    '',
                                    'error'
                                )
                            })
                    }}>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Sender</span>
                            </label>
                            <input onChange={(e) => {
                                handleChange(e)
                            }}
                                type="text" placeholder="Type here" className="input input-bordered w-full" name='container_name' value={containerName.container_name} />
                        </div>
                        <div className=' py-4'>
                            <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md' type='submit'>send</button>
                        </div>
                    </form>
                </label>
            </label>
        </div >
    )
}

export default CreateContainerButton