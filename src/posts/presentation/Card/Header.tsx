import React from "react";
interface PostHeaderProps {
	children: React.ReactNode;
}
const PostHeader: React.FC<PostHeaderProps> = ({children}) => {
	return (
		<div className='flex items-center justify-between px-5 py-3 sm:bg-white border'>
			{children}
		</div>
	);
};

export default PostHeader;
