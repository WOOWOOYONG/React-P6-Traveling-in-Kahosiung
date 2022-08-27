import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";

const TourDetail = () => {
  const { Id } = useParams();
  const [data, setData] = useState({});
  const { Name, Toldescribe, Picture1 } = data;
  useEffect(() => {
    const FetchData = async () => {
      const url =
        "https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c";
      const res = await fetch(url);
      const result = await res.json();

      const detail = result.data.XML_Head.Infos.Info.filter(
        (item) => item.Id === Id
      );
      setData({ ...detail[0] });
    };
    FetchData();
  }, []);
  const navigate = useNavigate();

  return (
    <>
      {data.Name ? (
        <div className="card">
          <h2>{Name}</h2>
          <br />
          <img src={Picture1} alt={Name} />
          <p>{Toldescribe}</p>
          <input
            className="btn"
            type="button"
            value="回列表"
            onClick={() => {
              navigate("/tour");
            }}
          />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default TourDetail;
