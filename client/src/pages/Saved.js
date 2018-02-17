import React, { Component } from "react";
import List from '../components/List/List';
import ListItem from '../components/List/ListItem';
import SavedTitle from '../components/Title/SavedTitle';
import API from "../utils/API";

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  render() {
    return (
      [
        <SavedTitle />,
        <List>
          {this.state.articles.map(article => (
            <ListItem key={article._id}>
              <div className="headlines">
                <h4>{article.title}</h4>
                <p>Date Published: {article.datepub}</p>
              </div>
              <div className="buttons">
                <button className="btn" onClick={() => this.deleteArticle(article._id)}>Delete</button>
                <button className="btn"><a href={article.url}>View Article</a></button>
              </div>
            </ListItem>
          ))}
        </List>
      ]
    )
  }
}

export default Saved;
