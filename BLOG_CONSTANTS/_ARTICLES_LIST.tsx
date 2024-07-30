import { iArticle } from "../src/shared/interfaces";
import { ALEX } from "./_BLOG_SETUP";

const ARTICLES_LIST: iArticle[] = [
  {
    path: "/pages/blog/blog-post-four.tsx",
    featureArticle: true,
    preview: {
      author: ALEX,
      date: "July 29 2024",
      articleTitle: "Privacy, Ethics and Digital Learning Blog Post 4.",
      tags: "blog post 4",
      thumbnail: "/public/images/computer_chip.jpg",
      shortIntro:
        "Some thoughts on Privacy, Ethics and Digital Learning",
      category: "EDCI339",
    },
    seo: {
      keywords:
        "demo, centered, centered layout, blog page layout, blog page design with centered layout, writing first article,",
      ogImage: "/public/images/computer_chip.jpeg",
    },
  },
  {
    path: "/pages/blog/blog-post-three.tsx",
    featureArticle: false,
    preview: {
      author: ALEX,
      date: "July 22 2024",
      articleTitle: "Publicity vs privacy and instructor guided learning blog post 3",
      tags: "blog post 3",
      thumbnail: "/public/images/neetcode.png",
      shortIntro:
        "My experiences with open learning",
      category: "EDCI339",
    },
    seo: {
      keywords:
        "demo, centered, centered layout, blog page layout, blog page design with centered layout, writing first article,",
      ogImage: "/public/images/baldface.jpeg",
    },
  },
  {
    
    path: "/pages/blog/blog-replies-july-23.tsx",
    featureArticle: false,
    preview: {
      author: ALEX,
      date: "July 23 2024",
      articleTitle: "Blog Replies July 2023",
      tags: "blog post 3",
      thumbnail: "/public/images/sunset.jpeg",
      shortIntro:
        "A copy of my replies for the week.",
      category: "EDCI339",
    },
    seo: {
      keywords:
        "demo, centered, centered layout, blog page layout, blog page design with centered layout, writing first article",
      ogImage: "/public/images/sunset.jpeg",
    },
  },
  {
    path: "/pages/blog/blog-post-two.tsx",
    featureArticle: false,
    preview: {
      author: ALEX,
      date: "July 14 2024",
      articleTitle: "My experiences with open learning theories blog post 2",
      tags: "blog post 2",
      thumbnail: "/public/images/csc370.png",
      shortIntro:
        "My experiences with open learning",
      category: "EDCI339",
    },
    seo: {
      keywords:
        "demo, centered, centered layout, blog page layout, blog page design with centered layout, writing first article, webexpe, webexpe.com",
      ogImage: "/public/images/baldface.jpeg",
    },
  },
  {
    path: "/pages/blog/blog-post-one.tsx",
    featureArticle: false,
    preview: {
      author: ALEX,
      date: "July 09 2024",
      articleTitle: "Blog Post 1",
      tags: "first article",
      thumbnail: "/public/images/baldface.jpeg",
      shortIntro:
        "A short intro into my hopes and experiences with learning",
      category: "EDCI339",
    },
    seo: {
      keywords:
        "demo, centered, centered layout, blog page layout, blog page design with centered layout, writing first article, webexpe, webexpe.com",
      ogImage: "/public/images/baldface.jpeg",
    },
  },
  {
    path: "/pages/blog/your-first-article.tsx",
    featureArticle: false,
    preview: {
      author: ALEX,
      date: "July 09 2024",
      articleTitle: "DEMO Blog Post",
      tags: "demo, first article",
      thumbnail: "/public/images/elcapitan.jpeg",
      shortIntro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      category: "EDCI339",
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
