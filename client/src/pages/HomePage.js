import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContainer } from '../store/action/actionContainer'
import EmptyContainer from './EmptyContainer'
import CreateContainerButton from '../components/CreateContainerButton'
import CardContainer from '../components/CardContainer'

function HomePage() {
    const [loading, setLoading] = useState(true)
    const containers = useSelector((state) => {
        console.log(state)
        return state.rootContainer.containers
    })
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchContainer())
            .then(() => setLoading(false))
            .catch(err => {
                console.log(err)
            })
        console.log(containers)
    }, [])

    let cardContainer = containers.map((el, index) => {
        return (
            <CardContainer name={el.container_name} key={index} id={el.id} />
        )
    })

    return (
        <>
            {
                loading
                    ? <h1 className=' py-5 px-10 text-xl font-medium'>Home Page</h1>
                    : (<div>
                        {
                            containers.length === 0
                                ? (<EmptyContainer />)
                                : (
                                    <div className='h-screen  overflow-scroll'>
                                        <h1 className=' py-5 px-10 text-xl font-medium'>Home Page</h1>
                                        <div className='px-10 pt-10'>
                                            <CreateContainerButton />
                                        </div>
                                        <div className='grid grid-cols-4 gap-16 px-16 py-16'>
                                            {cardContainer}
                                        </div>
                                    </div>

                                )
                        }
                    </div>)
            }


        </>
    )
}

export default HomePage 