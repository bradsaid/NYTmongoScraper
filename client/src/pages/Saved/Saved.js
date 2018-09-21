import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Saved extends Component {
  state = {
    books: [],
    title: "",
    search: "",
    results: [],
    start: "",
    end: "",
    url: "",
    date: "",
    key: "",
    savedArticles: []
  };

  componentDidMount() {
    this.loadArticles()
  }

  searchArticle = query => {
    API.searchArticles(query)
    .then(res =>
      this.setState({ results: res.data.response.docs }, function ()
    { console.log(this.state.results) })
    )
    .then(this.loadArticles())
    .catch(err => console.log(err))
  }

  loadArticles = () => {
    API.getArticles()
    .then(res =>
      this.setState({ savedArticles: res.data })
    )
    .catch(err => console.log(err))
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

    handleSave = (articleData) => {
    API.saveArticle( articleData )
      .then(res => this.loadArticles())
      .catch(err => console.log(err))
    };
  


  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  handleDelete = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
    let searchTerms = []
    searchTerms.push(this.state.search, this.state.start, this.state.end)
    this.searchArticle(searchTerms)
    }
    
  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-3"></Col>
        <Col size="md-6">
        <Jumbotron>
              <h1>Saved Articles</h1>
            </Jumbotron>
            {this.state.results.length ? (
              <List>
                {this.state.savedArticles.map(article => {
                  return (
                    <ListItem key={article._id} value={this.state.title} name="title">
                    <a href={article.web_url} >
                      <strong>
                        {article.headline.main} 
                       
                       Article
                      </strong>
                    </a>
                    <DeleteBtn onClick={() => this.handleDelete(article._id)} />
                  </ListItem>
                  );
                })
                }
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </Col>
        <Col size="md-3"></Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
