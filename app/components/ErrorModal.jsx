var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function(){
    return {
      title: 'Error'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function(){

    var {title, message} = this.props

    var modalMarkup = (
      <div className="reveal tiny text-center" id="errorModal" data-reveal="">
        <h1>{title}</h1>
        <p className="lead">{message}</p>
        <button className="close-button" data-close="" aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    var modal = new Foundation.Reveal($('#errorModal'));
    modal.open();
  },
  render: function(){
    return(
      <div></div>
    )
  }
});

module.exports = ErrorModal;
