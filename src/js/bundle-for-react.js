'use strict';

const html = 
(
  `<div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
</div>`
);

const js = (
  `onSubmit(e)
  {
    e.preventDefault();
    const job = 
    { 
      title: 'Developer', 
      company: 'Facebook' 
    }; 
  }`
);

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