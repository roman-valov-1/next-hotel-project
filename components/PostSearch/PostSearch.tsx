'use client';
import { getPostsBySearch } from "@/services/getPostsBySearch";
import { FormEventHandler, useState } from "react";

type Props = {
   onSearch: (value: any[]) => void;
}

export default function PostSearch( { onSearch }: Props) {
   const [search, setSearch] = useState<string>('');

   const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault();
      const posts = await getPostsBySearch(search);
      onSearch(posts);
   }

   return (
      <form onSubmit={handleSubmit}>
         <input
            type="search"
            placeholder="search"
            value={search}
            onChange={e => setSearch(e.target.value)}
         />
         <button type="submit">Search</button>
      </form>
   )
}


//пример клиентской компоненты, которая использует хуки и прочее