import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CreateDaisiForm from '../components/CreateDaisiForm'
import { fetchForm } from '../store/action/action.Form'
import CardForm from '../components/CardForm'

function FormDaisi() {
    const [loading, setLoading] = useState(true)
    const forms = useSelector((state) => {
        return state.rootForm.forms
    })

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchForm())
    }, [])


    let cardForm = forms.map((el, index) => {
        return (
            < CardForm uri={el.name} key={index} />
        )
    })
    return (
        <div className='h-screen'>
            {
                !loading
                    ? <h1 className=' py-5 px-10 text-xl font-medium'>Home Page</h1>
                    : (
                        <div className='h-screen overflow-scroll'>
                            <h1 className=' py-5 px-10 text-xl font-medium'>Daisi Form</h1>
                            <div className='px-10'>
                                <CreateDaisiForm />
                            </div>
                            <div className='grid grid-cols-4 gap-16 px-16 py-16'>
                                {cardForm}
                            </div>

                        </div>

                    )
            }

        </div>



    )
}

export default FormDaisi