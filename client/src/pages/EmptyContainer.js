import React from 'react'
import CreateContainerButton from '../components/CreateContainerButton'

function EmptyContainer() {
    return (
        <div className='flex justify-center py-40'>
            <div className='flex flex-col text-center'>
                <h1 className=' text-2xl font-semibold py-1'>Container Creation</h1>
                <h1 className=' font-sans pb-5'>Hello! We found you haven't deploy your Daisi Container to connect your Whatsapp Number to Daisi. Please create your first Daisi Container!</h1>
                <CreateContainerButton />
            </div>
        </div>
    )
}

export default EmptyContainer