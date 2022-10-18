import { useEffect, useState } from "react";
import { getFile } from "../api/file";
import { Code } from "../components/Code";
import { Subtitle } from "../components/Subtitle";
import { Viewer } from "../components/Viewer";

const HTML_FILE_PATH = "/labs/firthlab/index.html";
const CSS_FILE_PATH = "/labs/firthlab/style.css";

const FirthLab = () => {
  const [labHtml, setLabHtml] = useState("");
  const [labCss, setLabCss] = useState("");

  useEffect(() => {
    getFile({
      path: HTML_FILE_PATH,
      onSuccess: (text) => setLabHtml(text),
    });

    getFile({
      path: CSS_FILE_PATH,
      onSuccess: (text) => setLabCss(text),
    });
  }, []);

  return (
    <div className="firth-lab">
      <Subtitle text={"Код HTML файла"} />
      <Code text={labHtml} language={"html"} />
      <Subtitle text={"Код CSS файла"} />
      <Code text={labCss} language={"css"} />
      <Subtitle text={"Результат"} />
      <Viewer path={HTML_FILE_PATH} />
    </div>
  );
};

export { FirthLab };
