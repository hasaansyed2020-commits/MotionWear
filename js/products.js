export async function loadProducts() {
  const res = await fetch('./data/products.json');
  if (!res.ok) {
    console.error('Failed to load products.json');
    return [];
  }
  try {
    const data = await res.json();
    return data;
  } catch (e) {
    console.error('Error parsing products.json', e);
    return [];
  }
}
