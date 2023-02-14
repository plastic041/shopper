import Image from "next/image";
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
    <article className="flex flex-col gap-4">
      <h1 className="font-bold text-4xl">전체 상품</h1>
      <div className="grid grid-cols-4 gap-x-4 gap-y-8">
        {product.map((product) => (
          <div key={product.id}>
            <div className="flex flex-col gap-2">
              <img
                src={product.image}
                alt={product.title}
                className="aspect-square object-contain"
                loading="lazy"
              />
              <span>{product.title}</span>
              <span className="tabular-nums">${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
