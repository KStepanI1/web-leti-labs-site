import { useCallback } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { APP_ROUTES_CONFIG } from "../utils/constants";
import { Button } from "./Button";
import { Subtitle } from "./Subtitle";
import { Viewer } from "./Viewer";

export interface ResultProps {
  path: string;
  title?: string;
}

const Result = ({ path, title }: ResultProps) => {
  const navigate = useNavigate();

  const handleClickBtn = useCallback(() => {
    navigate({
      pathname: `${APP_ROUTES_CONFIG.resultViewer.path}`,
      search: `?${createSearchParams({ src: path })}`,
    });
  }, [navigate, path]);

  return (
    <section className="result">
      <div className="result__header">
        <Subtitle text={title || "Результат"} />
        <Button onClick={handleClickBtn}>Открыть</Button>
      </div>

      <Viewer height={"640px"} src={path} />
    </section>
  );
};

export { Result };
