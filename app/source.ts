import { docs, meta } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { InferPageType, loader } from "fumadocs-core/source";
import { icons } from "lucide-react";
import { create } from "@/components/ui/icon";
import { attachFile, createOpenAPI } from "fumadocs-openapi/server";

export const utils = loader({
  baseUrl: "/docs",
  icon(icon) {
    if (icon && icon in icons) {
      return create({ icon: icons[icon as keyof typeof icons] });
    }
  },
  source: createMDXSource(docs, meta),
  pageTree: {
    attachFile,
  },
});

export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(docs, []),
});

export const openapi = createOpenAPI({});

export type Page = InferPageType<typeof utils>;
export type Meta = InferPageType<typeof utils>;
