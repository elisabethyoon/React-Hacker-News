import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getNewsData } from "../utils/Api";

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ItemList: []
    };
  }

  componentDidMount = () => {
    getNewsData()
      .then(({ data }) => {
        this.setState({
          ItemList: data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { ItemList } = this.state;
    return (
      <div>
        <ul className="news-list">
          {ItemList.map((item) => {
            return (
              <li key={item.id}>
                <div className="user-points">{item.points}</div>
                <div className="news-contents">
                  <p className="list-title"> {item.title}</p>
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

export default NewsPage;
