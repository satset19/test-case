import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { createForm } from '../store/action/action.Form'

function CreateDaisiForm() {
    const [form, setForm] = useState({})
    const handleInput = (e) => {
        let obj = { ...form }
        obj[e.target.name] = `https://forms.daisi.id/${e.target.value}`
        setForm(obj)
    }
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <label htmlFor="my-modal-4" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Create Form</label>

                <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                <label htmlFor="my-modal-4" className="modal">
                    <label className="modal-box relative" htmlFor="">
                        <label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold">Create From</h3>
                        <form onSubmit={(e) => {
                            dispatch(createForm(form))

                        }} >
                            <div className="form-control w-full py-5">
                                <label className="label">
                                    <span className="label-text">Form Name</span>
                                </label>
                                <div className="form-control py-2">
                                    <label className="input-group ">
                                        <span className='w-1/2 text-sm'>https://forms.daisi.id/</span>
                                        <input
                                            onChange={handleInput}
                                            type="text" placeholder="jhonPhanter" name='name' className="input input-bordered w-4/5" />
                                    </label>
                                </div>
                            </div>
                            <div className=' py-4'>
                                <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md' type='submit'>send</button>
                            </div>
                        </form>
                    </label>
                </label>
            </div >
        </div>
    )
}

export default CreateDaisiForm