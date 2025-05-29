export const extractPageNumber = (url: string | null): number => {
  if (!url) return 1;
  const params = new URLSearchParams(url.split("?")[1]);
  const page = params.get("page");
  return page ? parseInt(page) : 1;
};