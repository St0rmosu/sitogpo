import { sql } from '@vercel/postgres';

export async function getProducts() {
  const { rows } = await sql`
    SELECT * FROM products ORDER BY id;
  `;
  return rows;
}

export async function getProductBySlug(slug: string) {
  const { rows } = await sql`
    SELECT * FROM products WHERE slug = ${slug};
  `;
  return rows[0];
}
