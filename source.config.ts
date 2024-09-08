import {
  defineDocs,
  defineConfig,
  defineCollections,
} from "fumadocs-mdx/config";
import { remarkCodeHike, recmaCodeHike } from "codehike/mdx";

export const { docs, meta } = defineDocs();

/** @type {import('codehike/mdx').CodeHikeConfig} */
const chConfig = {
  components: { code: "Code" },
};

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [[remarkCodeHike, chConfig]],
    recmaPlugins: [[recmaCodeHike, chConfig]],
    jsx: true,
  },
});
