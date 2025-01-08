'use client';
import Posts from "@/components/Posts/Posts";
import PostSearch from "@/components/PostSearch/PostSearch";
import { getAllPosts } from "@/services/getAllPosts";
import { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <>
      <h1>Blog</h1>
      <PostSearch onSearch={setPosts}/>
      {isLoading && <h3>Loading...</h3>}
      <Posts posts={posts} />
    </>
  )
}
