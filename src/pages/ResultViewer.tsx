import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import { Viewer } from "../components/Viewer";

const ResultViewer = () => {
  const [searchParams] = useSearchParams();
  const src = searchParams.get("src");

  const handleClickBackButton = useCallback(() => {
    window.history.back();
  }, []);

  return (
    <div className="result-viewer">
      <Button
        variant="icon"
        onClick={handleClickBackButton}
        className="result-viewer__back"
      >
        <Icon name="ArrowLeft" color="white" />
        <span>Вернуться</span>
      </Button>
      {src && <Viewer src={src} />}
    </div>
  );
};

export default ResultViewer;
