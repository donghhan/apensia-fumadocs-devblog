import { AnnotationHandler, Pre, RawCode, highlight } from "codehike/code";
import { callout } from "./annotations/callout";
import { mark } from "./annotations/mark";
import { diff } from "./annotations/diff";
import { CopyButton } from "./annotations/button";

export async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "github-from-css");

  return (
    <div className="rounded">
      <div className="text-center p-4 h-9 flex items-center justify-between bg-neutral-800 text-zinc-400 text-sm relative rounded-t-lg">
        {highlighted.meta}
        <CopyButton text={highlighted.code} />
      </div>
      <Pre
        code={highlighted}
        handlers={[borderHandler, bgHandler, mark, diff, callout]}
        className="border mt-0 rounded-b-lg rounded-t-none bg-neutral-950"
      />
    </div>
  );
}

const borderHandler: AnnotationHandler = {
  name: "border",
  Block: ({ annotation, children }) => {
    const borderColor = annotation.query || "red";
    return <div style={{ border: "1px solid", borderColor }}>{children}</div>;
  },
};

const bgHandler: AnnotationHandler = {
  name: "bg",
  Inline: ({ annotation, children }) => {
    const bgColor = annotation.query || "#2d26";
    return <span style={{ background: bgColor }}>{children}</span>;
  },
};
