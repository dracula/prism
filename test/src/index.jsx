import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Prism from "prismjs";
import "./dracula-prism.css";

import { html } from "./htmlSnippet";
import { js } from "./jsSnippet";

class HtmlExample extends React.Component 
{
  componentDidMount() 
  {
    Prism.highlightAll();
  }
  
  render() 
  {
    return (
      <pre>
        <code className="language-html">
          { html }
        </code>
      </pre>
    );
  }
}

class JsExample extends React.Component 
{
  componentDidMount() 
  {
    Prism.highlightAll();
  }
  
  render() 
  {
    return (
      <pre>
        <code className="language-javascript">
          { js }
        </code>
      </pre>
    );
  }
}

ReactDOM.render(<HtmlExample/>, document.getElementById('html'));
ReactDOM.render(<JsExample/>, document.getElementById('js'));