import React from "react";
interface PostBodyProps { 
	image: string; 
	postId: string;
	alt?: string;
	className?: string;
	likeFunction: (postId: string) => void;
}
export const PostBody: React.FC<PostBodyProps> = ({ 
	image,
	alt,
	className,
	postId,
	likeFunction 
}) => {
	
	return (
		<div className='w-full'>
			<img src={image} className={className ?? 'bg-cover w-full h-auto select-none cursor-pointer'} alt={alt?? 'Post'} onDoubleClick={() => likeFunction(postId)} />
		</div>
	);
};

