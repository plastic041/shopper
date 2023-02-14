import Link from "next/link";

async function getCategoriesData() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json() as Promise<string[]>;
}

export async function Categories() {
  const categories = await getCategoriesData();

  return (
    <ul className="flex flex-col gap-2">
      {categories.map((category) => (
        <Link
          className="flex hover:translate-x-4 transition"
          key={category}
          href={`/categories/${category}`}
        >
          <span>{category}</span>
        </Link>
      ))}
    </ul>
  );
}
