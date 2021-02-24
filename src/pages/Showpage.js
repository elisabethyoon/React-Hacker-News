import React, { Component } from "react";
import { askShowData } from "../utils/Api";

class Showpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: []
    };
  }
  componentDidMount = () => {
    askShowData()
      .then(({ data }) => {
        this.setState({
          showList: data
        });
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { showList } = this.state;
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
}

export default Showpage;
