import { type HomeLayoutProps } from "fumadocs-ui/home-layout";
import { DocsLayoutProps } from "fumadocs-ui/layout";
import { RootToggle } from "fumadocs-ui/components/layout/root-toggle";
import { utils } from "./source";
import { modes } from "@/utils/mode";

export const baseOptions: HomeLayoutProps = {
  githubUrl: "https://github.com/donghhan/apensia-fumadocs-devblog",
  nav: {
    title: "Apensia Devblog",
  },
  links: [
    {
      text: "Letha",
      url: "/docs",
      active: "nested-url",
    },
    {
      text: "Blog",
      url: "/blog",
    },
  ],
};

export const docsOptions: DocsLayoutProps = {
  ...baseOptions,
  tree: utils.pageTree,
  nav: {
    ...baseOptions.nav,
    transparentMode: "none",
    children: undefined,
  },
  // sidebar: {
  //   banner: (
  //     <RootToggle
  //       options={modes.map((mode) => ({
  //         url: `/${mode.param}`,
  //         title: mode.name,
  //         description: mode.description,
  //         icon: "",
  //       }))}
  //     />
  //   ),
  // },
};
