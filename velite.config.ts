import {defineConfig, defineCollection, s} from "velite";

// blog/hello-world 

const computedField = <T extends {slug: string}>(data: T)=> ({
    ...data,
    slugAsParams: data.slug.split("/").slice(1).join("/"),
})

const posts = defineCollection({
    name: "Post",
    pattern: "blog/**/*.mdx",
    schema: s.object({
        slug: s.path(),
        title: s.string().max(100),
        description: s.string().max(1000).optional(),
        date: s.isodate(),
        published: s.boolean().default(true),
        body: s.mdx(),

    }).transform(computedField),
});

export default defineConfig({
    root: "content",
    output: {
        data: ".velite",
        assets: "public/static",
        // base: "/static",
        name: "[name]-[hash:6].[ext]",
        clean: true,
    },
    collections: {posts},
    mdx: {
        rehypePlugins: [],
        remarkPlugins: [],
    }
})