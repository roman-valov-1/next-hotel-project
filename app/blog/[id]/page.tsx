import { Metadata } from "next";

async function getData(id: string) {

  const res = await fetch(`${process.env.DEV_URL}/api/posts/${id}`, {
    method: 'GET',
    next: {
      revalidate: 60,
    }
  });

  if (!res.ok) throw new Error("Unable to fetch post")

  const data = await res.json()

  return data;
}

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params: { id } }: Props ): Promise<Metadata> {
  const post = await getData(id);
  
  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  )
}

//динамический роутинг
