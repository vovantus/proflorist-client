const URLS = {
  ROOT: "/",
  ABOUT: "/about",
  FLORIST: {
    ROOT: "/",
    CART: "cart",
    CATALOG: { ROOT: "catalog", CATEGORY: ":categoryId" },
    NEWS: "news",
  },
} as const;

export default URLS;
