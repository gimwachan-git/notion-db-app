import { NextResponse } from 'next/server';
import { getDatabaseItems } from '@/lib/notion';

export async function GET() {
  try {
    const items = await getDatabaseItems();
    return NextResponse.json(items);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to fetch items' }, { status: 500 });
  }
}
