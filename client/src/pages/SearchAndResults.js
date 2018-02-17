import React, {Component} from "react";
import SearchForm from '../components/SearchForm/SearchForm';
import List from '../components/List/List';
import ListItem from '../components/List/ListItem';
import API from "../utils/API";



class SearchAndResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      topic: "",
      syear: "",
      eyear: ""
    }
  }

  searchArticles = query => {
    API.search(query)
      .then(res => this.setState({results: res.data.response.docs}))
      .catch(err => console.log(err));
    console.log("query: " + query);
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
    console.log("state: " + this.state.eyear);
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticles(this.state.topic + "&begin_date=" + this.state.syear + "0101&end_date=" + this.state.eyear + "0101");
  };

  handleClick = (title, url, datepub) => {
    API.saveArticle({
      title: title,
      url: url,
      datepub: datepub
    })
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  }

  render() {
    return (
      [
        <SearchForm
          value1={this.state.topic}
          value2={this.state.syear}
          value3={this.state.eyear}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />,
        <List>
          {this.state.results.map(article => (
            <ListItem key={article._id}>
              <div className="headlines">
                <h4>{article.headline.main}</h4>
                <p>Date Published: {article.pub_date}</p>
              </div>
              <div className="buttons">
                <button className="btn"
                        onClick={() => this.handleClick(article.headline.main, article.web_url, article.pub_date)}>Save
                </button>
                <button className="btn" onClick={() => window.open(article.web_url, "_blank")}>View Article</button>
              </div>
            </ListItem>
          ))}
        </List>
      ]
    )
  }
}

export default SearchAndResults;
