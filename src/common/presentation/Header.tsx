import React from 'react'
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <>
            <div className='z-10 sticky top-0 border-b h-14 bg-white'>
                <div className='max-w-screen-lg flex items-center justify-between h-full mx-auto px-5'>
                    <Link to='/' className="font-Oleo text-blue-700 text-5xl">
                        <h3>Sologram</h3>
                    </Link>
                </div>
            </div>
        </>
    ) 
}
