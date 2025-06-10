'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchQuery = e.currentTarget.search.value.trim(); // "search" — это `name` инпута
    if (searchQuery) {
      router.push(`/search/${searchQuery}`);
    }
  };

  return (
    <form onSubmit={handleSearch} method="POST">
      <input
        type="text"
        placeholder="Search..."
        className="border py-1 rounded-md px-2 text-sm"
        name="search"
      />
      {/* <button
            type="submit"
            className='border py-1 rounded-md px-2 text-sm'
        >
            Search
        </button> */}
    </form>
  );
}
