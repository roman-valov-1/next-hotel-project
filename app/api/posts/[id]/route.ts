import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";
import { posts } from '../posts';

export async function GET(req: Request, { params }: {params: {id: string}}) {
   const id = +params.id;

   return NextResponse.json(posts.find(post => post.id === id));
}
//получения поста по id с помощью динамического роутинга

export async function DELETE(req: Request, { params }: {params: { id: string } }) {
   const id = params.id;

   const headerList = headers();
   const type = (await headerList).get('Content-Type');
   //способ получения заголовков

   const cookiesList = cookies();
   const coo = (await cookiesList).get('Cookie');
   //способ получения куки

   redirect('/blog')
   //способ редиректа, после обработки запроса на удаление

   return NextResponse.json({ id });
}
