export async function getPostsBySearch(id: string) {

   const res = await fetch(`http://localhost:3000/api/posts?q=${id}`);
 
   if (!res.ok) throw new Error("Unable to fetch post")
 
   const data = await res.json()
 
   return data;
 }