import Link from 'next/link';

export default function Page() {
  const coffeeShops = [
    { id: '1', name: 'The Coffee Bean' },
    { id: '2', name: 'Starbucks' },
    { id: '3', name: 'Dunkin Donuts' },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 
    bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <h1>Discover Coffee Shops Near You</h1>

      <ul>
        {coffeeShops.map((shop) => (
          <li key={shop.id}>
            <Link href={`/coffee-shops/${shop.id}/${shop.name}`}>
              <div>{shop.name}</div>
            </Link>
          </li>
        ))}
      </ul>

    </main>
  );
}
