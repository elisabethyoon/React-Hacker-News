import React, { Component } from "react";
import { getUserData } from "../utils/Api";

function number(x) {
  debugger;
  if (!x) return;
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {}
    };
  }
  componentDidMount = () => {
    const { match } = this.props;
    const { name } = match.params;
    getUserData(name)
      .then(({ data }) => {
        this.setState({
          userInfo: data
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { userInfo } = this.state;
    debugger;
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
              Founder/CEO Pipedream.com. Also father, investor & lifelong
              learner.
            </p>
          </li>
        </ul>
        <div>자료없음</div>
      </div>
    );
  }
}

export default UserInfo;
