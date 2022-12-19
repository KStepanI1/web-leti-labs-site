import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLabs } from "../api/lab";
import LabPreview from "../components/LabPreview";
import NoData from "../components/NoData";

const Home = () => {
  const [labs, setLabs] = useState<{ id: number, name: string }[]>()
  const navigate = useNavigate()
  const isLabsExists = labs && labs.length > 0

  useEffect(() => {
    getLabs({
      onSuccess: (data) => {
        setLabs(data)
      }
    })
  }, [])

  const handleClick = (id: number) => {
    navigate(`/lab/${id}`)
  }

  return <div className="home">
    {isLabsExists ? labs?.map(lab => <LabPreview name={lab.name} key={lab.name} onClick={() => handleClick(lab.id)} />) : <NoData />}
  </div>;
};

export { Home };
