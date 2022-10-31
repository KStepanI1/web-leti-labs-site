import { Lab, LabSections } from "../components/Lab";
import { ResultProps } from "../components/Result";

const HTML_FILE_PATH = "/labs/thirdlab/index.html";
const CSS_FILE_PATH = "/labs/thirdlab/style.css";

const ThirdLab = () => {
  const LabSections: LabSections[] = [
    {
      title: "Код HTML файла",
      filePath: HTML_FILE_PATH,
      language: "html",
    },
    {
      title: "Код CSS файла",
      filePath: CSS_FILE_PATH,
      language: "css",
    },
  ];

  const LabResult: ResultProps = {
    title: "Результат",
    path: HTML_FILE_PATH,
  };

  return (
    <div className="third-lab">
      <Lab sections={LabSections} result={LabResult} />
    </div>
  );
};

export default ThirdLab;
