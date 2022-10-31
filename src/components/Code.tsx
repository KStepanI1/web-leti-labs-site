import hljs from "highlight.js";
import { CopyButton } from "./CopyButton";

interface CodeProps {
  text: string;
  language: string;
}

const Code = ({ text, language }: CodeProps) => {
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
