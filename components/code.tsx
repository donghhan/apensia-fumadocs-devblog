import { AnnotationHandler, Pre, RawCode, highlight } from "codehike/code";
import { callout } from "./annotations/callout";
import { mark } from "./annotations/mark";
import { diff } from "./annotations/diff";
import { CopyButton } from "./annotations/button";

export async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "github-dark");

  return (
    <div className="relative">
      <CopyButton text={highlighted.code}/>
<Pre
      code={highlighted}
      handlers={[borderHandler, bgHandler, mark, diff, callout]}
      className="border bg-card"
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
  Inline: ({ annotation, children }) => (
    <span style={{ background: "#2d26" }}>{children}</span>
  ),
};
