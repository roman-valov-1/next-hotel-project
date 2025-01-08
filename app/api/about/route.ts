import { NextResponse } from "next/server";
import { about } from'./about';

export async function GET(req: Request) {
   
   return NextResponse.json(about);
}
