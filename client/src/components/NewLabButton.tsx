import { useNavigate } from "react-router-dom";
import { APP_ROUTES_CONFIG } from "../utils/constants";
import { Button } from "./Button";

const NewLabButton = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`${APP_ROUTES_CONFIG.newLab.path}`);
    }

    return <Button onClick={handleClick}>
        Добавить
    </Button>
}

export { NewLabButton }