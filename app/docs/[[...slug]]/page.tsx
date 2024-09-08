import { utils } from "@/app/source";
import type { Metadata } from "next";
import { Pre, CodeBlock } from "fumadocs-ui/components/codeblock";
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Code } from "@/components/code";

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = utils.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            Code,
            // pre: ({ ref: _ref, ...props }) => (
            //   <CodeBlock {...props} keepBackground>
            //     <Pre>{props.children}</Pre>
            //   </CodeBlock>
            // ),
          }}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return utils.generateParams();
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = utils.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
