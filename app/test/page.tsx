"use client";

import { useSearchParams } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();

  const search = searchParams.get("asd");

  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  return <>Search: {search}</>;
}
