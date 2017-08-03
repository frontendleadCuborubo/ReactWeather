var React = require('react');

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
    var modal = new Foundation.Reveal($('#errorModal'));
    modal.open();
  },
  render: function(){
    var {title, message} = this.props;
    return(
      <div className="reveal tiny text-center" id="errorModal" data-reveal="">
        <h1>{title}</h1>
        <p className="lead">{message}</p>
        <button className="close-button" data-close="" aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }
});

module.exports = ErrorModal;
