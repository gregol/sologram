import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';

import { actionCreators } from "../../common/infrastructure/redux/store/actions";
import FillHome from '../../posts/presentation/Card/icons/FillHome';
import FillAdd from '../../posts/presentation/Card/icons/FillAdd';
import OutlineHome from '../../posts/presentation/Card/icons/OutlineHome';
import { Link } from 'react-router-dom';

export default function Footer() {
    const dispatch = useDispatch();
    const isLogged = useSelector((state: any) => state.isLogged)
    const location = useLocation();
    const handleLogout = () => {
        dispatch(actionCreators.logout())
    }
    return (
        <footer className="z-10 sticky bottom-0 border-t h-14 bg-white">
            <div className='max-w-screen-lg flex items-center justify-between h-full mx-auto px-5'>
                <div className='flex items-center space-x-5 text-gray-600'>
                    <Link to='/'>
                        {location.pathname === '/' ? <FillHome /> : <OutlineHome />}
                    </Link>
                    <Link to='/create-post' className="font-Oleo text-blue-700 text-5xl">
                        <FillAdd />
                    </Link>
                    {isLogged &&
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a className="cursor-pointer" onClick={handleLogout} >
                            Logout
                        </a>
                    }
                </div>
            </div>
        </footer>
    )
}
