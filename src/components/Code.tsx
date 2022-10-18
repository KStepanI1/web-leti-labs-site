import hljs from "highlight.js";
import "highlight.js/styles/agate.css";

interface CodeProps {
  text: string;
  language: string;
}

const Code = ({ text, language }: CodeProps) => {
  return (
    <pre>
      <code
        className={` hljs language-${language} code`}
        dangerouslySetInnerHTML={{
          __html: hljs.highlight(text, { language }).value,
        }}
      ></code>
    </pre>
  );
};

export { Code };
