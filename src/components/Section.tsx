import { useMemo } from "react";
import { Code } from "./Code";
import { Loader } from "./Loader";
import { Subtitle } from "./Subtitle";

export interface SectionProps {
  title: string;
  description?: string;
  code: string;
  language: string;
  isPending?: boolean;
}

const Section = ({
  title,
  description,
  code,
  language,
  isPending,
}: SectionProps) => {
  const CodeWithLoader = useMemo(
    () =>
      !isPending ? (
        <Code text={code} language={language} />
      ) : (
        <Loader size="medium" />
      ),
    [isPending, language, code]
  );

  if (description) {
    return (
      <section className="section">
        <Subtitle text={title} />
        <p className="section__description">{description}</p>
        {CodeWithLoader}
      </section>
    );
  }

  return (
    <section className="section">
      <Subtitle text={title} />
      {CodeWithLoader}
    </section>
  );
};

export { Section };
