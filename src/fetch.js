export default async function fetchData() {
  const response = await fetch(`https://api.jikan.moe/v4/manga`);
  const data = await response.json();

  return data.data;
}
