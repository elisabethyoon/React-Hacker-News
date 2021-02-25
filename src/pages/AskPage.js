import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAskData } from "../utils/Api";

function AskPage() {
  const [askList, setAskList] = useState([]);

  useEffect(() => {
    getAskData()
      .then(({ data }) => {
        setAskList(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul className="news-list">
        {askList.map((item) => {
          return (
            <li key={item.id}>
              <div className="user-points">{item.points}</div>
              <div className="news-contents">
                <p className="list-title">{item.title}</p>
                <p className="list-info">
                  {item.time_ago} / {item.comments_count}개의 코멘트 / by
                  <Link to={`/user/${item.user}`} className="user">
                    {item.user}
                  </Link>
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AskPage;
