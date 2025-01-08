import { NextResponse } from "next/server";

export async function GET(req: Request) {
   const API_KEY = process.env.SOME_API_KEY;

   const movies = await fetch('some_url_with_secret_api');

   return NextResponse.json(movies);
}

//способ прятать апи ключи на серверной прослойке