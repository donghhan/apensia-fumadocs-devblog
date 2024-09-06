import { AnnotationHandler, Pre, RawCode, highlight } from "codehike/code";
import { callout } from "./annotations/callout";

export async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "github-from-css");

  return (
    <Pre
      code={highlighted}
      handlers={[borderHandler, bgHandler]}
      className="border bg-card"
    />
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
