export const fetchRepos = async (lang) => {
  const endpoint = encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${lang}&sort=stars&order=desc&type=Repositories`
  );
  const res = await fetch(endpoint);
  const { items } = await res.json();
  console.log(items);
  return items;
};
