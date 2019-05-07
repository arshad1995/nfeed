import "./App.css";
import React, { Component } from "react";
import Button from "./components/Buttons/Button";
import Header from "./components/Header/Header";
import NewsFeed from "./components/Newsfeed/Newsfeed";

let channels = [
  {
    name: "ansa",
    id: 1,
    channel_id: "ansa"
  },
  {
    name: "ESPN",
    id: 2,
    channel_id: "espn"
  },
  {
    name: "abc-news",
    id: 3,
    channel_id: "abc-news"
  },
  {
    name: "bbc-sport",
    id: 4,
    channel_id: "bbc-sport"
  },
  {
    name: "breitbart-news",
    id: 5,
    channel_id: "breitbart-news"
  },
  {
    name: "cnbc",
    id: 6,
    channel_id: "cnbc"
  }
];

class App extends Component {
  state = {
    articles: []
  };
  componentDidMount() {
    this.fetchNews("ansa");
  }
  fetchNews = channel_id => {
    fetch(
      `https://newsapi.org/v2/top-headlines?sources=${channel_id}&apiKey=539240fb4d8d48bc9657e4c6fadfb939`
    )
      .then(data => data.json())
      // .then(data => console.log(data));
      .then(data => this.setState({ articles: data.articles }));
  };
  render() {
    return (
      <div className="app">
        <div className="header">
          <Header name={"NewsFeed"} />
        </div>
        <div className="button">
          {channels.map(news => (
            <Button
              name={news.name}
              id={news.id}
              channel_id={news.channel_id}
              fetch={a => this.fetchNews(a)}
            />
          ))}
        </div>
        <div className="newsfeed">
          {this.state.articles.map(body => (
            <NewsFeed
              urlToImage={body.urlToImage}
              title={body.title}
              description={body.description}
              author={body.author}
              url={body.url}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
