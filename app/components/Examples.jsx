var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return(
    <div className="section">
      <h1 className="text-center">Examples</h1>
      <p>Here a few examples to try out:</p>
      <ol>
        <li>
          <Link to="/?location=Washington">Washington, KO</Link>
        </li>
        <li>
          <Link to="/?location=Rio">Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  )
}

module.exports = Examples;
