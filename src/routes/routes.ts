export const PLATFORM_URLS = {
  ROOT: "/",
  ABOUT: "/about",
} as const;

export const FLORIST_URLS = {
  ROOT: "/",
  CART: "/cart",
  CATALOG: { ROOT: "/catalog", CATEGORY: ":categoryId" },
  NEWS: "/news",
} as const;
