# Kausik's Personal Portfolio

This is a static portfolio website created using React and Vite.
You can use this template to build your own simple portfolio website. Of course, with some customization.

## To use this as a template

1. Clone the project

```bash
git clone git@github.com:kausik10/portfolio.git
```

Or

```bash
git clone https://github.com/kausik10/portfolio.git
```

2. Navigate to the directory and run the project

```bash
cd portfolio
yarn install
yarn dev
```

The project should be running on `localhost:5173` by default.

## Customization

1. Customize your themes and colors by navigating to the `tailwind.config.js` file

```js
extend: {
      colors: {
        dark_bg: "#0c202f",
        dark_bg_secondary: "#000E1D",
        dark_nav: "#101e26",
        light_text: "#d1e8e2",

        light_bg: "#eae7dc",
        light_nav: "#d3d9d4",
        dark_text: "#212a31",

        dark_blue: "#0C1844",
        primary_btn: "#124e66",
        secondary_btn: "#748d92",
        primary_border: "#66fcf1",
        secondary_border: "#45a29e",
      },
```

The color values used in the project are mostly these. You can change the color values in this `tailwind.config.js` file.

2. The blogs are inside the `content/blog` file. Each blog should have these lines in the beginning. The file extension should be `mdx`

```js
---
title: Title of your Blog
description: This is optional
date: YYYY-MM-DD eg: 2021-10-03
tags: It can either be "random" | "journal" | "poem" | "programming"
published: It can either be true | false
---
```

3. The article with `true` flag will be displayed on the website.

4. You can customize the article type and content in `velite.config.ts` file.

```js
const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(100),
      description: s.string().max(1000).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      body: s.mdx(),
      tags: s.string().optional(),
      // Add other fields you want in your blog. Don't remove the slug, body, tags.
    })
    .transform(computedField),
});
```

5. You can add custom components in the blog. Make sure to add it in the `src/components/mdx-content.tsx` file.

## ShadCN UI taxonomy

If you don't want tailwind typography `prose` and `dark:prose-invert` but instead prefer to use the `ShadCN UI taxonomy`, go to `components/mdx-content.tsx` file
and, copy the styling from

```bash
https://github.com/shadcn-ui/taxonomy/blob/main/components/mdx-components.tsx
```

and paste it inside this. Keep in mind, this project doesn't include ShadCN. Thus, you need to add ShadCN UI before doing this.

```js
const sharedComponents = {
  // Add any global components you want to use across your MDX files
  Callout,
  // Add other components here
};
```
