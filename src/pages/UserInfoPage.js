import React, { useState, useEffect } from "react";
import { getUserData } from "../utils/Api";

function number(x) {
  if (!x) return;
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function UserInfo(props) {
  const [userInfo, setUserInfo] = useState({});
  const { name } = props.match.params;

  useEffect(() => {
    getUserData(name)
      .then(({ data }) => {
        setUserInfo(data);
      })
      .catch((err) => console.log(err));
  }, [name]);
  return (
    <div>
      <ul className="user-list">
        <li>
          <p className="info-subject">user: </p>
          <p className="info-desc">{userInfo.id}</p>
        </li>
        <li>
          <p className="info-subject">created: </p>
          <p className="info-desc">{userInfo.created}</p>
        </li>
        <li>
          <p className="info-subject">karma: </p>
          <p className="info-desc">{number(userInfo.karma)}</p>
        </li>
        <li>
          <p className="info-subject">about: </p>
          <p className="info-desc">
            Founder/CEO Pipedream.com. Also father, investor & lifelong learner.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default UserInfo;
