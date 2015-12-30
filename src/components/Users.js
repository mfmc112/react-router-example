var React = require('react');

var User = React.createClass({
  render: function(){
    return (
      <div className="ui message">
        <h1 className="ui header">User screen by ID ({this.props.params.userID}) ! </h1>
        <p>(This is coming from the URL and routed as userID<br/>
            User screen by ID routed by react-router</p>
      </div>
    );
  }
});

module.exports = User;
