export default async function fetchData() {
  const response = await fetch(`../public/data.json`);
  const data = await response.json();

  return data.data;
}
