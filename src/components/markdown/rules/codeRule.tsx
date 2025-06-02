import katex from "katex";

import "katex/dist/katex.min.css";

export function CodeComponent({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const match = /language-(\w+)/.exec(className || "");
  const language = match?.[1];

  if (language === "katex") {
    const code = String(children);
    return <Katex code={code} />;
  }

  return <code className={className}>{children}</code>;
}

function Katex({ code }: { code: string }) {
  const cleanCode = code.replaceAll(/^\\\[|\\\]\n$/g, "");
  const katexResult = katex.renderToString(cleanCode, {
    throwOnError: false,
    displayMode: true,
    maxSize: 1,
  });

  return <div dangerouslySetInnerHTML={{ __html: katexResult }} />;
}
