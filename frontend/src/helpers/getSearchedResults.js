export const getSearchedResults = (search, data) => {
  if (!search) return data;

  const searchWords = search.toLowerCase().split(" ").filter(Boolean);

  return data.filter((article) => {
    const title = article?.title.toLowerCase() || "";
    const content = article?.content?.toLowerCase() || "";

    return searchWords.some(
      (word) => title.includes(word) || content?.includes(word)
    );
  });
};
