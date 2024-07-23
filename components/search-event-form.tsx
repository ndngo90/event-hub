'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SearchEventForm() {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/events/${searchText}`);
  };
  return (
    <form className="mb-4 flex justify-center" onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        placeholder="Search events in any city..."
        className="w-[95vw] sm:w-[30rem] bg-slate-800 text-gray-300 p-4 rounded-md ring-orange-400 focus:ring-1 transition outline-none"
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
}
