import React from 'react'

function CardForm({ uri }) {
    return (
        <div className="card transition w-96 bg-base-100 shadow-2xl hover:scale-105 ease-in-out duration-100">
            <h1 className='px-5 py-5 text-sm font-semibold bg-black bg-opacity-5 font-sans'>URL : {uri}</h1>
            <hr />
            <h1 className=' pt-5 px-10 font-semibold'>Status</h1>
            <h1 className='px-10 text-red-500 font-semibold'>QR</h1>
            <figure className="px-10 pt-5">
                <img src="https://www.investopedia.com/thmb/hJrIBjjMBGfx0oa_bHAgZ9AWyn0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/qr-code-bc94057f452f4806af70fd34540f72ad.png"
                    alt="Shoes"
                    className="rounded-xl"
                    style={{ height: 200, width: 200 }} />
            </figure>
            <div className="card-body items-center text-center">
                <div className="flex justify-around w-full">
                    <button className="btn btn-primary"
                    >Reload</button>
                    <button className="btn btn-error"
                    >Delete</button>
                </div>
            </div>
        </div>
    )
}

export default CardForm