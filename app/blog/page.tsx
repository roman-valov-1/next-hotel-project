import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch(`${process.env.DEV_URL}/api/posts`, {
    next: {
      revalidate: 60
    }
  });

  if (!response.ok) throw new Error("Unable to fetch posts")

  const data = await response.json()

  return data;

  //запрос данных в серверной компоненте
}

export const metadata: Metadata = {
  title: 'Blog',
}

export default async function Blog() {
  const posts = await getData();

  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((post: any) => {
          return <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        })}
      </ul>
    </>
  )
}
