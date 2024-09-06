import { type HomeLayoutProps } from "fumadocs-ui/home-layout";
import { DocsLayoutProps } from "fumadocs-ui/layout";
import { source } from "./source";

export const baseOptions: HomeLayoutProps = {
  nav: {
    title: "My App",
  },
  links: [
    {
      text: "Documentation",
      url: "/docs",
      active: "nested-url",
    },
  ],
};

export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: source.pageTree,
};
