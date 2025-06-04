import { getDatabaseItems } from '@/lib/notion';

export default async function HomePage() {
  const items = await getDatabaseItems();

  return (
    <main>
      <h1>Notion Database Items</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </main>
  );
}
