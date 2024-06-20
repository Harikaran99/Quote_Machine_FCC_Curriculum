import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { Paper, Typography, Button } from "@mui/material";
import './App.scss';


class QuoteBox extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      quote: "dummy",
      author: "not found",
      quotes: null
    }
    this.setRandomQuote = this.setRandomQuote.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => {
      if(!response.ok){
        throw new Error("Network response was not ok"); 
      }
      return response.json();
    })
    .then(data => {
      this.setState({
        quotes : data.quotes
      });
      this.setRandomQuote(this.state)
    })
    .catch(error => console.error(error))
  }

  setRandomQuote(){
    const randomInt = Math.ceil(Math.random() * 102)
    this.setState(prevState => ({
      ...prevState,
      quote: prevState.quotes[randomInt].quote,
      author: prevState.quotes[randomInt].author,
      ranInt: randomInt
    }))
  }
  render() {
    return(
      <Paper id="quote-box" className ="backdrop-blur-md bg-white/30 ">
        <Typography id="text" variant="h4">
          <FontAwesomeIcon icon={faQuoteLeft} id="quote-left"/>{this.state.quote}<FontAwesomeIcon icon={faQuoteRight} id="quote-right"/>
          </Typography>
        <Typography id="author" variant="h6">- {this.state.author}</Typography>
        <h4>index is {this.state.ranInt}</h4>
        <Button id="new-quote" variant="contained" onClick={() => this.setRandomQuote()}>New Quote</Button>
        <Button href="https://twitter.com/intent/tweet" variant="contained" target="_top" id="tweet-quote">tweet</Button>
      </Paper>
    )
  }
}

export default QuoteBox;