import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import SaveBtn from "../../components/SaveBtn";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    search: "",
    results: [],
    url: "",
    date: "",
    key: ""
  };

  componentDidMount() {
    this.loadArticles()
  }

  // Search Articles
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
      //this.setState({ results: res.data, title: "", url: "", date: ""})
      this.setState({ results: res.data })
    )
    .catch(err => console.log(err))
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleSave = (event) => {
    console.log(event.target)
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
    API.saveArticle({
      title: this.state.title,
      url: this.state.url,
      date: this.state.date
    })
      .then(res => this.loadArticles())
      .catch(err => console.log(err))
  };

  handleInputChange = (event) => {
    console.log(event.target)
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
    console.log("this.state.name = " + this.state.name)
  };

  handleDelete = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticle(this.state.search)
    console.log(this.state.search)
    }
    
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-3"></Col>
          <Col size="md-6">
            <Jumbotron><h1>Search</h1></Jumbotron>
            <form>
              <Input value={this.state.title} onChange={this.handleInputChange} name="title" placeholder="Topic" />
              <Input value={this.state.author} onChange={this.handleInputChange} name="author" placeholder="Start Year" />
              <Input value={this.state.synopsis} onChange={this.handleInputChange} name="synopsis" placeholder="End Year" />
              <FormBtn onClick={this.handleFormSubmit}>Search</FormBtn>
            </form>
          </Col>
          <Col size="md-3"></Col>
          </Row>
          <Row>
          <Col size="md-3"></Col>  
          <Col size="md-6 sm-12">
            <Jumbotron><h1>Results</h1></Jumbotron>
            {this.state.results.length ? (
              <List>
                {this.state.results.map(article => {
                  return (
                    <ListItem  key={article._id} > 
                    <a href={article.web_url}><strong> Article Headline</strong></a>
                    <DeleteBtn onClick={() => this.handleDelete(article._id)} />
                    <SaveBtn value={this.state.title} name="title" onClick={this.handleSave}  />
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
        <Row>
        <Col size="md-3"></Col>
        <Col size="md-6">
        <Jumbotron>
              <h1>Saved Articles</h1>
            </Jumbotron>
            {this.state.results.length ? (
              <List>
                {this.state.results.map(article => {
                  return (
                    <ListItem key={article._id} value={this.state.title} name="title">
                    <a href={article.web_url} >
                      <strong>
                       {//} {article.headline.main} 
                       } 
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

export default Books;
