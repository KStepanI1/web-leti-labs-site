import { useEffect, useState } from "react";
import { getFile } from "../api/file";
import { Result, ResultProps } from "./Result";
import { Section } from "./Section";

export interface LabSections {
  filePath: string;
  language: string;
  title: string;
  description?: string;
}

interface LabProps {
  sections: LabSections[];
  result: ResultProps;
}

const Lab = ({ sections, result }: LabProps) => {
  const [filesContent, setFilesContent] = useState<{
    [key: string]: { text: string; isPending: boolean };
  }>(
    Object.fromEntries(
      sections.map((section, i) => [i, { text: "", isPending: true }])
    )
  );

  useEffect(() => {
    sections.map((section, i) =>
      getFile({
        path: section.filePath,
        onSuccess: (text) =>
          setFilesContent((state) => ({
            ...state,
            [i]: { text, isPending: false },
          })),
      })
    );
  }, [sections]);

  return (
    <div className="Lab">
      {sections.map((section, i) => (
        <Section
          isPending={filesContent[i].isPending}
          key={`lab-section__${i}`}
          title={section.title}
          code={filesContent[i].text}
          language={section.language}
        />
      ))}
      <Result {...result} />
    </div>
  );
};

export { Lab };
