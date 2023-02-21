import React from "react";
class QuoteGenerator extends React.Component {
  constructor() {
    super();
    this.state = { quote: "", status: false, typeQuote: "", message: "" };
    this.handleQuote = this.handleQuote.bind(this);
    this.addQuote = this.addQuote.bind(this);
    this.handleOwnQuote = this.handleOwnQuote.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleQuote = () => {
    this.setState({
      quote: "",
    });
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((quote) => {
        this.setState({ quote });
      });
  };
  addQuote = () => {
    this.setState({
      status: true,
    });
  };
  handleOwnQuote = (event) => {
    this.setState({
      typeQuote: event.target.value,
    });
  };
  handleSubmit = () => {
    if (this.state.typeQuote.length > 100) {
      this.setState({
        message: <strong>Too Long Quote</strong>,
      });
    } else {
      this.setState({
        message: <strong>{this.state.typeQuote}</strong>,
      });
    }
  };
  render() {
    return (
      <div>
        <h1>Quote Generartor</h1>
        <h2>{this.state.quote.content}</h2>
        <p>{this.state.quote.author}</p>
        <Button quote={this.state.quote} handleQuote={this.handleQuote}>
          Get Quote
        </Button>
        <button onClick={this.addQuote}>Add Quote</button>
        {this.state.status && (
          <div>
            Type Your Own Quote:
            <input type="text" onChange={this.handleOwnQuote}></input>
            <button onClick={this.handleSubmit}>Submit</button>
            {this.state.message}
          </div>
        )}
      </div>
    );
  }
}
export default QuoteGenerator;
const Button = ({ handleQuote }) => {
  return <button onClick={handleQuote}>Get Quote</button>;
};
