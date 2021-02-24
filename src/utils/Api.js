import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.hnpwa.com/v0/"
});

const getUserData = (userName) => {
  return Api.get(`user/${userName}.json`);
};

const getNewsData = () => {
  return Api.get("news/1.json");
};

const getAskData = () => {
  return Api.get("ask/1.json");
};

const askShowData = () => {
  return Api.get("show/1.json");
};

export { Api, getUserData, getNewsData, getAskData, askShowData };
