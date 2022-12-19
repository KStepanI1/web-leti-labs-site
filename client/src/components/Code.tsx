import hljs from "highlight.js";
import { CopyButton } from "./CopyButton";

interface CodeProps {
  text: string;
  language: string;
}

const Code = ({ text, language }: CodeProps) => {
  if (!text) return null

  return (
    <pre className="code">
      <code
        className={`hljs language-${language}`}
        dangerouslySetInnerHTML={{
          __html: hljs.highlight(text, { language }).value,
        }}
      />
      <CopyButton textToCopy={text} />
    </pre>
  );
};

export { Code };
