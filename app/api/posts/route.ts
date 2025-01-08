import { NextResponse } from "next/server";
import { posts } from'./posts';

export async function GET(req: Request) {
   const { searchParams } = new URL(req.url);
   const query = searchParams.get('q');
   //способ получения query параметров, которые поступают в запросе

   let currentPosts = posts;

   if (query) {
      currentPosts = posts.filter( post => post.title.toLowerCase().includes(query.toLocaleLowerCase()))
   }
   //если в запросе не было параметров для фильтрации, то вернутся все посты

   return NextResponse.json(currentPosts);
}

//обработка запросов с клиентской стороны на серверной прослойке, которую предоставляет next