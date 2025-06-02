import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import React from "react";
import { CodeComponent } from "./rules/codeRule";

const components = { code: CodeComponent };

export function MarkdownRenderer({ markdown }: { markdown: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {markdown}
    </ReactMarkdown>
  );
}
