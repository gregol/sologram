import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { InputWithLabel } from '../../../common/presentation/molecules/InputWithLabel'
import { Divider } from '../../../common/presentation/atom/divider/divider';
import { Button } from '../../../common/presentation/atom/button/button';
import { Alert } from '../../../common/presentation/atom/alert/alert';
import { actionCreators } from "../../../common/infrastructure/redux/store/actions";
import { fakeLoginRequest } from "../../../common/infrastructure/redux/store/reducer";

export const Login: React.FC = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector((state: any) => state.isLogged)
    const navigate = useNavigate();
    const [username, setUsername] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [error, setError] = React.useState<string>('')
    
    React.useEffect(() => {
        if(isLogged) navigate('/')
    }, [])
    const handleLogin = async () => {
        try {
            const userResponse = await fakeLoginRequest(username, password);
            dispatch(actionCreators.login(userResponse));
            navigate('/')
        }catch (err: any) {
            setError(err);
        }   
    }
    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                        {error && 
                            <>
                                <Alert color="red">
                                    <p className="text-sm text-red-700">
                                        {error}
                                    </p>
                                </Alert>
                                <Divider />
                            </>
                        }
                        <InputWithLabel 
                            name="Username" 
                            type="text" 
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e: any) => setUsername(e.target.value)}
                        />
                        <Divider />
                        <InputWithLabel 
                            name="Password" 
                            type="password" 
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e: any) => setPassword(e.target.value)}
                        />
                        <Divider />
                        <Button onClick={handleLogin}>
                            Login
                        </Button>
                    </div>
                </form>
            </div>
            <Divider />
        </div>
    )
}
