import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAskData } from "../utils/Api";

class AskPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      askList: []
    };
  }

  componentDidMount = () => {
    getAskData()
      .then(({ data }) => {
        this.setState({
          askList: data
        });
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { askList } = this.state;
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
}

export default AskPage;
