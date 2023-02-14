import { type Product } from "typings/product";

async function getProductsData() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json() as Promise<Product[]>;
}

export default async function Page() {
  const product = await getProductsData();

  return (
    <article className="flex flex-col gap-4 max-w-[65ch]">
      <h1 className="font-bold text-4xl">Post Title</h1>
    </article>
  );
}
