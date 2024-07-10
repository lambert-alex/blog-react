import { iArticle } from "../src/shared/interfaces";
import { ALEX } from "./_BLOG_SETUP";

const ARTICLES_LIST: iArticle[] = [
  {
    path: "/pages/blog/your-first-article.tsx",
    featureArticle: true,
    preview: {
      author: ALEX,
      date: "July 09 2024",
      articleTitle: "DEMO Blog Post",
      tags: "demo, first article",
      thumbnail: "/public/images/elcapitan.jpeg",
      shortIntro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "tutorial",
    },
    seo: {
      keywords:
        "demo, centered, centered layout, blog page layout, blog page design with centered layout, writing first article, webexpe, webexpe.com",
      ogImage: "/public/images/elcapitan.jpeg",
    },
  },
];

export const SORTED_ARTICLES_BY_DATE = ARTICLES_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1
);
