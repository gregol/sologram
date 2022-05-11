import React, { useEffect } from 'react'
import { Post } from '../../posts/domain/post.entity';

import { Card } from '../../posts/presentation/Card'
import { listPosts } from '../infrastructure/manageLocalStorage';
export default function Home() {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [page, setPage] = React.useState<number>(1);

  const loadPost = async (page: number) => {
    let listPost = await listPosts(page)
    setPosts(listPost.items);
  }
  
  useEffect(() => {
    loadPost(page);
    window.addEventListener('scroll', handleScroll)
  },[])

  useEffect(() => {
    if(page > 1){
      let newPosts = listPosts(page)
      if(page <= newPosts.totalPage){
        setPosts((oldPost) => [...oldPost, ...newPosts?.items]);
      }
    }
  }, [page])
  
  const handleScroll = async (e: any) => {
    if(window.innerHeight + e.target.documentElement.scrollTop + 1 
        >= e.target.documentElement.scrollHeight
      ){
        setPage(page => page + 1);
    }
        
  }

  return (
    <main className='flex flex-col max-w-screen-lg mx-auto justify-center'>
      {posts?.map((post: any) => ( <Card key={post.id} post={post} /> ))}
    </main>
  )
}
