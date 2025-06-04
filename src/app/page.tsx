import { getDatabaseItems } from '@/lib/notion';
import { Table } from '@radix-ui/themes';

export default async function HomePage() {
  const items = await getDatabaseItems();

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
