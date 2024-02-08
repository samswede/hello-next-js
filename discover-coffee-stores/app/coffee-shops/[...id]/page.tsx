import React from 'react';
import Link from 'next/link';

export default function Page(props: {params: {id: [string]} }) {

  const { id } = props.params;

  //console.log(name);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 
    bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <h1>Discover Coffee Shops Near You</h1>
      <ul>
        {id.map((thing: string, idx: number) => (
          <li key={idx}>
            <h2>slug {idx}: {thing}</h2>
          </li>
        ))}
      </ul>

      <ul>
        <li>
          <Link href="/coffee-shops">
            Back to Coffee Shops
          </Link>
        </li>
      </ul>

    </main>
  );
}
