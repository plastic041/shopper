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
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <a href={`/categories/${category}`}>{category}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
