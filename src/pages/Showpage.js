import React, { useState, useEffect } from "react";
import { askShowData } from "../utils/Api";

function Showpage() {
  const [showList, setShowList] = useState([]);

  useEffect(() => {
    askShowData()
      .then(({ data }) => {
        setShowList(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul className="jobs-list">
        {showList.map((item, index) => {
          return (
            <li key={item.id}>
              <span className="list-number">{index + 1}. </span>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Showpage;
