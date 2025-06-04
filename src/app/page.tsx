'use client';
import { useEffect, useState } from 'react';
import { Table } from '@radix-ui/themes';
import { DatabaseItem } from '@/lib/notion';

export default function HomePage() {
  const [items, setItems] = useState<DatabaseItem[]>([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const res = await fetch('/api/items');
        if (res.ok) {
          const data = await res.json();
          setItems(data);
        } else {
          console.error('Failed to fetch items');
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchItems();
  }, []);

  return (
    <main>
      <h1>Notion Database Items</h1>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.title}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </main>
  );
}
