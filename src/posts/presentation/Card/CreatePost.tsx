import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { v4 } from 'node-uuid'

import { Button } from '../../../common/presentation/atom/button/button';
import { Divider } from '../../../common/presentation/atom/divider/divider';
import { InputWithLabel } from '../../../common/presentation/molecules/InputWithLabel'
import { ImageFilter } from '../ImageFilter/ImageFilter';

import { actionCreators } from "../../../common/infrastructure/redux/store/actions";

import '../ImageFilter/instagram-filters.css'
import { Label } from '../../../common/presentation/atom/label/Label';

export const CreatePost = () => {
    const isLogged = useSelector((state: any) => state.isLogged)
    const [imageUrl, setImageUrl] = React.useState(null);
    const [imageFilter, setImageFilter] = React.useState('none');
    const dispatch = useDispatch();
    const navigate = useNavigate();

     React.useEffect(() => {
        if(!isLogged) navigate('/login')
    }, [])
    const handleSubmit = () => {
        
        const postData = {
            id: v4(),
            isLiked: false,
            isBookmarked: false,
            likeCount: 0,
            image: imageUrl,
            filter: imageFilter,
            created_at: Date.now(),
            user: {
                username: "Gregol",
                email: 'greg@gmmail.com',
                avatar: null
            }
        }
        dispatch(actionCreators.addToList(postData));
        setImageUrl(null);
    };
    return (
        <div className="flex flex-col items-center  mt-8 sm:mx-auto sm:w-full sm:max-w-md m-4">
            <div className="w-full bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" action="#" method="POST">
                    <InputWithLabel 
                        name="Image url" 
                        type="text" 
                        placeholder="Enter an image url"
                        value={imageUrl}
                        onChange={(e: any) => setImageUrl(e.target.value)}
                    />
                    { imageUrl ? 
                    <div className="flex items-center justify-center bg-black pr-4 pl-4 rounded-md">
                        <img src={imageUrl} alt="Post" className={`${imageFilter}`} />
                    </div>
                    : <Label>Please add a valid  image url!!</Label>
                    }
                </form>
            </div>
            <Divider />
            <ImageFilter setImageFilter={setImageFilter} image={imageUrl} />
            <Divider />
            { imageUrl && 
                <Button onClick={handleSubmit}>
                    Post now!
                </Button>
            }
        </div>
    )
}
