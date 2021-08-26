import { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import shortid from "shortid";
import { HandbookContext } from "../utlis/Context";
import Card from "./Card";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Definition = () => {
  const { skill, active } = useContext(HandbookContext);
  const [data, setData] = useState(skill[0] || {});

  const handleClick = (item) => {
    setData(item);
  };
  return (
    <div>
      <div className="mt-3">
        <a href="/skill">
          <FontAwesomeIcon icon={faArrowLeft} size="3x" />
        </a>
      </div>
      {active ? (
        <div className="container">
          <div className="card-body">
            <h1 className="card-header">{active}</h1>
            <Card data={data} />
          </div>
          <div className="list-skills">
            {skill?.map((item) => (
              <div className="list-element">
                <img src={item.imageUrl} alt={item.action} />
                <button
                  className="btn btn-secondary button"
                  key={shortid.generate()}
                  onClick={() => handleClick(item)}>
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Redirect to="/skill" />
      )}
    </div>
  );
};
export default Definition;
