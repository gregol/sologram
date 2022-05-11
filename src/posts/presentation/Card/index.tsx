import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { Post } from '../../domain/post.entity';
import {PostBody} from './Body';
import { Footer } from './Footer';
import Header from './Header';
import { OutlineHorizontalDots } from './icons/OutlineHorizontalDots';
import { actionCreators } from '../../../common/infrastructure/redux/store/actions';
interface CardProps {
  post:  Post
  ;
}
export const Card: React.FC<CardProps> = ({ post }) => {
  const { image, user: author, filter } = post;
  const dispatch = useDispatch();

  const handleLike = (postId: string) => {
    dispatch(actionCreators.like(postId))
  }
  return (
    <div className='w-full mt-4'>
      <Header>
        <div className='flex items-center space-x-3 select-none'>
				
				<h5 className='font-medium hover:underline cursor-pointer'>
					<Link to={`/${author?.username}`}>{author?.username}</Link>
				</h5>
			</div>

			<OutlineHorizontalDots />
      </Header>
      <PostBody 
        image={image}
        className={`${filter} bg-cover w-full h-auto select-none`} 
        postId={post.id}
        likeFunction={handleLike} 
      />
      <Footer isBookmarked={false} post={post} />
    </div>
  )
}
