# Notion DB App

This is a simple Next.js application that connects to a Notion database using server components.

## Setup

1. Install dependencies (requires npm access):

```bash
npm install
```

If network access is restricted, you may need to manually download the dependencies.

2. Copy `.env.example` to `.env.local` and fill in your Notion credentials:

```
NOTION_TOKEN=your_secret_integration_token
NOTION_DATABASE_ID=your_database_id
```

3. Run the development server:

```bash
npm run dev
```

Visit `http://localhost:3000` to view the list of database items.
For a simple Radix UI dialog example, open `http://localhost:3000/radix`.
