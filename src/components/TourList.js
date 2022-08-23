import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const TourList = () => {
  const [tourlist, setTourlist] = useState([]);
  useEffect(() => {
    const Fetchlist = async () => {
      const url =
        "https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c";
      const res = await fetch(url);
      const result = await res.json();
      const list = result.data.XML_Head.Infos.Info;
      setTourlist(list);
    };
    Fetchlist();
  }, []);

  return (
    <>
      <h3>旅遊景點列表</h3>
      <div className="content">
        {tourlist.map((item) => {
          return (
            <div className="container">
              <Link to={`/tour/${item.Id}`}>
                <img src={item.Picture1} alt={item.Name} />
                <p>{item.Name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default TourList;
